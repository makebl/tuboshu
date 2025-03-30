const { WebContentsView, shell, session} = require('electron')
const { Utility } = require('./utility/utility');
const eventManager = require('./eventManager');
const lokiManager = require('./store/lokiManager');
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

    removeView(name) {
        for (let i = 0; i < this.views.length; i++) {
            if (this.views[i].name === name.toLowerCase()) {
                this.views.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    refreshActiveView(){
        const activeView = this.getActiveView();
        if(!activeView.url.toLowerCase().startsWith("http")) return;

        Utility.loadWithLoading(activeView.object, activeView.url).then(()=>{
            eventManager.emit('set:title', activeView.object.webContents.getTitle());
        }).catch((error)=>{
            console.log('error', error);
            setTimeout(()=> this.refreshActiveView(), 1000)
        })
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

    createNewView(url, name) {
        if (this.isExist(name)) {
            this.activeView(name)
            return null;
        }

        const partitionName = 'persist:' + name;
        const mySession = session.fromPartition(partitionName);

        const isRemoteAddr = url.toLowerCase().startsWith("http");
        let preloadjs = isRemoteAddr ? "web.js" : "setting.js";
        if(url.includes("localhost")) preloadjs = "setting.js"

        let view = new WebContentsView({
            webPreferences: {
                sandbox: true,
                webSecurity: true,
                nodeIntegration: false,
                contextIsolation: true,
                partition: partitionName,
                preload: CONS.PATH.APP_PATH + '/app/preload/'+ preloadjs
        }})

        this.renderProcessGone(view);
        view.webContents.setZoomLevel(0)
        view.webContents.setUserAgent(userAgent.ua)
        Utility.alterRequestHeader(view)
        // Utility.alterResponseHeader(view)

        if(isRemoteAddr){
            this.injectJsCode(view, name);
            this.setProxy(mySession, name).then(()=>{
                Utility.loadWithLoading(view, url).then(()=>{
                    eventManager.emit('set:title', view.webContents.getTitle());
                })
            });
        }else{
            view.webContents.loadFile(url).then(() => {
                eventManager.emit('set:title', view.webContents.getTitle());
            })
        }

        view.webContents.setWindowOpenHandler((details) => {
            if(Utility.isMainDomainEqual(details.url, url)){
                view.webContents.send('open:window', details.url)
                return { action: 'deny' };
            }
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

    injectJsCode(view, name){
        //did-finish-load
        view.webContents.on('dom-ready',async ()=>{
            const manager = await lokiManager;
            const site = manager.getSite(name);
            if(site && Object.hasOwn(site,'jsCode') && site.jsCode.length > 0){
                const code = Utility.appendJsCode(JSON.stringify(site.jsCode))
                await view.webContents.executeJavaScript(code);
            }
        })

        view.webContents.on('did-finish-load',async ()=>{
            // try {
            //     const jsCode = Utility.getInjectPluginJsCode();
            //     if(jsCode){
            //         await view.webContents.executeJavaScript(jsCode);
            //     }
            // }catch (e){
            //     console.error('error:', e);
            // }
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

    renderProcessGone(view){
        view.webContents.on('render-process-gone', (event, details) => {
            console.error('test:渲染进程崩溃:', details.reason);
            if (!view.webContents.isDestroyed()) view.webContents.reload();
        });
    }

}

module.exports = new ViewManager();