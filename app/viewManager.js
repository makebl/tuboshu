const { WebContentsView, shell, session} = require('electron')
const eventManager = require('./eventManager');
const lokiManager = require('./lokiManager');
const CONS = require('./constants');
const userAgent = require('./disguise/userAgent');

class ViewManager {
    constructor() {
        this.views = [];
    }
    addView(view) {
        this.views.push(view);
    }

    isExist(name) {
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i].name === name.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    getActiveView() {
        return this.views.find(view => view.object.getVisible());
    }

    activeView(name) {
        const timestamp = Math.floor(Date.now() / 1000);
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i].name === name.toLowerCase()) {
                this.views[i].time = timestamp;
                this.views[i].object.setVisible(true)
                eventManager.emit('set:title', this.views[i].object.webContents.getTitle());
            }else{
                this.views[i].object.setVisible(false)
            }
        }
    }

    injectJsCode(view, name){
        view.webContents.on('did-finish-load',async ()=>{
            const manager = await lokiManager;
            const site = manager.getSite(name);
            if(site && Object.hasOwn(site,'jsCode') && site.jsCode.length > 0){
                //await view.webContents.executeJavaScript(site.jsCode)
                const sanitizedCode = JSON.stringify(site.jsCode);
                await view.webContents.executeJavaScript(`
                (function() {
                    try {
                        const scriptElement = document.createElement('script');
                        scriptElement.textContent = ${sanitizedCode};
                        document.body.appendChild(scriptElement);
                    } catch (e) {
                        console.error('Script injection failed:', e);
                    }
                })();
            `);
            }
        })
    }

    async setProxy(mySession, name) {
        const manager = await lokiManager;
        const site = manager.getSite(name);
        if(site && Object.hasOwn(site,'proxy') && site.proxy.length > 10){
            mySession.setProxy({
                proxyRules: site.proxy,
            });
        }
    }

    createNewView(url, name) {

        if (this.isExist(name)) {
            this.activeView(name)
            return null;
        }

        const partitionName = 'persist:' + name;
        const mySession = session.fromPartition(partitionName);

        let view = new WebContentsView({
            webPreferences: {
                partition: partitionName,
                nodeIntegration: false,
                contextIsolation: true,
                preload: CONS.PATH.APP_PATH + '/app/preloadUrl.js'
            }})

        view.webContents.setUserAgent(userAgent.ua)
        if(url.startsWith("http")){
            this.injectJsCode(view, name);
            this.setProxy(mySession, name).then(()=>{
                view.webContents.loadURL(url).then(()=>{
                    eventManager.emit('set:title', view.webContents.getTitle());
                }).catch(e => {
                    view.webContents.loadFile("gui/error.html").finally()
                })
            });
        }else{
            view.webContents.loadFile(url).then(() => {
                eventManager.emit('set:title', view.webContents.getTitle());
            })
        }


        // //view.webContents.openDevTools();
        view.webContents.setWindowOpenHandler((details) => {
            // return {
            //     action: 'allow',
            //     overrideBrowserWindowOptions: {autoHideMenuBar:true}
            // }
            shell.openExternal(details.url).finally();
            return { action: 'deny' };
        })

        this.views.forEach(view => {
           view.object.setVisible(false)
        })

        this.addView({
            name: name,
            url: url.toLowerCase(),
            time: Math.floor(Date.now() / 1000),
            object: view
        })
        return view
    }
}

module.exports = new ViewManager();