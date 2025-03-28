const {dialog, ipcMain, app} = require('electron');
const lokiManager = require('./../store/lokiManager');
const path = require('path');
const fs = require('fs').promises;


class DataExport {
    constructor() {
    }

    filterObjectByArray(obj, allowedKeys) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && !allowedKeys.includes(key)) {
                delete obj[key];
            }
        }
        return obj;
    }

    isValidUrl(urlString) {
        try {
            new URL(urlString);
            return true;
        } catch (error) {
            return false;
        }
    }

    async getConfigData() {
        const manager = await lokiManager;
        const data = manager.getSites();
        const allows = ['url', 'tag', 'name', 'img', 'proxy', 'order', 'isOpen', 'jsCode']
        return data.map(item => this.filterObjectByArray(item, allows));
    }

    async importConfigData(data) {
        if (!Array.isArray(data)) {
            throw new Error('Invalid data format. Data must be an array.');
        }
        const sites = data.filter(item =>{
            return item.hasOwnProperty('url') && item.hasOwnProperty('tag') && this.isValidUrl(item.url) && item.tag.length > 0
        });
        if(sites.length === 0){
            throw new Error('There is no legitimate data.');
        }

        let total = 0;
        const manager = await lokiManager;
        const allows = ['url', 'tag', 'name', 'img', 'proxy', 'order', 'isOpen', 'jsCode']
        sites.forEach(item => {
            if(item.hasOwnProperty('name')){
                if(manager.getSite(item.name)) return;
            }
            let ret = this.filterObjectByArray(item, allows)
            manager.addSite(ret);
            total++
        });
        return total;
    }

    bindExportIpc() {
        ipcMain.handle('export:config', async () => {
            const {canceled, filePath} = await dialog.showSaveDialog({
                title: 'Export Sites Data',
                defaultPath: path.join(app.getPath('downloads'), 'config.json'),
                filters: [
                    {name: 'config.json', extensions: ['json']}
                ]
            });
            if(canceled) return false;

            const data = await this.getConfigData()
            await fs.writeFile(filePath, JSON.stringify(data, null, 2));
            return true;
        })
    }
    bindImportIpc(){
        ipcMain.handle('import:config', async () => {
            const result = await dialog.showOpenDialog({
                title: 'Import Sites Data',
                properties: ['openFile'],
                filters: [{ name: '文本文件', extensions: ['json'] }]
            });
            if (result.canceled) return null;
            try {
                const data = await fs.readFile(result.filePaths[0], 'utf-8');
                return await this.importConfigData(JSON.parse(data));
            } catch (error) {
                throw new Error("can not read the file!"+error);
            }
        });
    }
}

module.exports = new DataExport();