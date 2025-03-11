const { app, BaseWindow, View, ipcMain, clipboard, WebContentsView } = require('electron')
const CONS = require('./constants');
const viewManager = require('./viewManager');
const lokiManager = require('./lokiManager');


class WindowManager{

    constructor() {
        this.window = null
        this.menuView = null
        this.webView = null
    }

    getMenuView(){
        return this.menuView;
    }

    getWindow(){
        return this.window;
    }

    createWindow() {
        const win = new BaseWindow({
            width: CONS.SIZE.WIDTH,
            height: CONS.SIZE.HEIGHT,
            autoHideMenuBar: true,
            show:false,
            icon: CONS.PATH.APP_PATH+'/icon.ico',
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
            }
        })

        const menuView = new WebContentsView({
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: CONS.PATH.APP_PATH +'/app/preload.js'
            }
        });

        let [width, height] = win.getContentSize();
        menuView.setBounds({ x: 0, y: 0, width:CONS.SIZE.MENU_WIDTH, height })
        menuView.webContents.loadFile('gui/index.html').then(()=>{
            this.gotoSetting();
            //menuView.webContents.openDevTools();
        })

        const webView = new View();
        webView.setBounds({ x: CONS.SIZE.MENU_WIDTH, y: 0, width: width-CONS.SIZE.MENU_WIDTH, height})

        win.contentView.addChildView(menuView);
        win.contentView.addChildView(webView);
        win.show();

        this.window = win;
        this.menuView = menuView;
        this.webView = webView;

        this.bindIpcMain();
        this.bindEvents();
    }

    bindIpcMain(){
        //跳转页面
        ipcMain.on('reload:url', (event, url, tag) => {
            let view = viewManager.createNewView(url, tag)
            if(view !== null){
                let {width, height} = this.webView.getBounds()
                view.setBounds({ x: 0, y: 0, width, height})
                this.webView.addChildView(view)
            }
        })

        //右键直接赋值文本
        ipcMain.on('copy:text', (event, text) => {
            clipboard.writeText(text);
        });

        //获取侧边栏配置
        ipcMain.handle('get:menu', async (event, ...args) => {
            const manager = await lokiManager;
            return manager.getMenus()
        });

        //更新左边导航栏
        ipcMain.on('update:menu', async (event, menu) => {
            const manager = await lokiManager;
            manager.updateSite(menu);
            this.menuView.webContents.reload();
        });

        //批量更新排序
        ipcMain.on('batch:menus', async (event, menus) => {
            const manager = await lokiManager;
            manager.batchUpdateSite(menus);
            this.menuView.webContents.reload();
        });

        //新增左边导航栏
        ipcMain.on('add:menu', async (event, menu) => {
            const manager = await lokiManager;
            manager.addSite(menu);
            this.menuView.webContents.reload();
        });

        //删除左边导航栏
        ipcMain.on('remove:menu', async (event, menu) => {
            const manager = await lokiManager;
            manager.removeSite(menu);
            this.menuView.webContents.reload();
        });
    }

    bindEvents(){
        this.window.on('resize', () => {
            this.handleResize()
        })

        this.window.on('show', () => {
            if(this.menuView.webContents.isLoading()) return;
            this.handleResize();
        })

        //窗口准备销毁，阻止默认事件
        this.window.on('close', (e) => {
            if(app.isQuitting === false){
                e.preventDefault();
                this.window.hide();
            }
        })

        //窗口已经销毁，清理资源
        this.window.on('closed', (e) => {
            this.window.removeAllListeners('resize');
            this.window.removeAllListeners('show');
            ipcMain.removeHandler('window-specific-event');
        })
    }

    handleResize() {
        const [width, height] = this.window.getContentSize();
        this.menuView.setBounds({ x: 0, y: 0, width: CONS.SIZE.MENU_WIDTH, height });
        this.webView.setBounds({ x: CONS.SIZE.MENU_WIDTH, y: 0, width: width - CONS.SIZE.MENU_WIDTH, height });

        viewManager.views.forEach(view => {
            view.object.setBounds({ x: 0, y: 0, width: width - CONS.SIZE.MENU_WIDTH, height });
        });
    }
    gotoSetting(){
        this.menuView.webContents.send('auto:click', CONS.SETTING[0]);
    }
}

module.exports = new WindowManager();