const { WebContentsView} = require('electron')
const CONS = require('./constants');
class ViewManager {
    constructor() {
        this.views = [];
    }
    addView(view) {
        this.views.push(view);
    }

    isExist(url) {
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i].url === url.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    getActiveView() {
        return this.views.find(view => view.object.getVisible());
    }

    activeView(url) {
        const timestamp = Math.floor(Date.now() / 1000);
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i].url === url.toLowerCase()) {
                this.views[i].time = timestamp;
                this.views[i].object.setVisible(true)
            }else{
                this.views[i].object.setVisible(false)
            }
        }
    }

    createNewView(url, tag) {
        if (this.isExist(url)) {
            this.activeView(url)
            return null;
        }

        let view = new WebContentsView({
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: CONS.PATH.APP_PATH + '/app/preloadUrl.js'
            }})

        if(url.startsWith("gui/")){
            view.webContents.loadFile(url).then(r => {})
        }else{
            view.webContents.loadURL(url).catch(e => {
                view.webContents.loadFile("gui/error.html").then(r => {})
            })
        }

        //view.webContents.openDevTools();
        view.webContents.setWindowOpenHandler(({ url }) => {
            return {
                action: 'allow',
                overrideBrowserWindowOptions: {autoHideMenuBar:true}
            }
        })

        this.addView({
            url: url.toLowerCase(),
            time: Math.floor(Date.now() / 1000),
            object: view
        })
        return view
    }
}

module.exports = new ViewManager();