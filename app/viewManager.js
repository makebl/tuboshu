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
        }else{
            let view = new WebContentsView({
                webPreferences: {
                    nodeIntegration: false,
                    contextIsolation: true,
                    preload: CONS.PATH.APP_PATH + '/app/preloadUrl.js'
                }})

            if(tag === "设置"){
                view.webContents.loadFile(url)
            }else{
                view.webContents.loadURL(url)
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
}

module.exports = new ViewManager();