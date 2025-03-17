const { app, globalShortcut, screen} = require('electron');
const windowManager = require('./windowManager');
const trayManager = require('./trayManager');
const viewManager = require('./viewManager');
const lokiManager = require('./lokiManager');
const eventManager = require('./eventManager');
const CONS = require('./constants');

// 在 Electron 中，你可以通过简单的字符串组合来定义一系列的快捷键。
// 这些字符串是由一个或多个由加号(+)连接的修饰键和一个键（key）组成。
// 修饰键包括 Command (或 Cmd 代表 macOS 的 Command 键),
// Control (或 Ctrl), CommandOrControl (或 CmdOrCtrl), Alt, 和 Shift。
// 键可以是单个字符（比如 A 到 Z）,数字 (0 到 9),功能键 (F1 到 F24),
// 或其他特殊键 (Backspace, Tab, Enter, Esc 等)。
// 组合快捷键的时候，按照下面的方式去写：
// 复制：CommandOrControl+C
// 粘贴：CommandOrControl+V
// 剪切：CommandOrControl+X
// 撤销：CommandOrControl+Z
// 重做：CommandOrControl+Shift+Z 或 CommandOrControl+Y
// 保存：CommandOrControl+S
// 新建：CommandOrControl+N
// 打开：CommandOrControl+O
// 关闭当前窗口：CommandOrControl+W
// 你也可以组合多个修饰键：
// 示例：CommandOrControl+Shift+Option+J (在 macOS 上 Option 是 Alt 键)

class ShortcutManager{

    constructor() {}

    initShortcuts(){
        lokiManager.then((manager) => {
            manager.getShortcuts().forEach((shortcut) => {
                if(shortcut.isOpen === false){
                    return;
                }
                if(!globalShortcut.isRegistered(shortcut.cmd)){
                    globalShortcut.register(shortcut.cmd, this[shortcut.name].bind(this))
                }
            })
        })
        eventManager.on('replace:shortcut', (data, resolve) => {
            if(data.shortcut.flag === true){
                const res = this.isDisableShortcuts(data.shortcut)
                delete data.shortcut.flag;
                resolve(res);
            }else{
                const res =this.updateShortcut(data.shortcut, data.oldShortcut);
                delete data.shortcut.flag;
                resolve(res);
            }
        });
        this.openDevTools();
        this.forceSystemExit();
    }

    isDisableShortcuts(shortcut){
        //禁用快捷键
        if((shortcut.isOpen === false) && globalShortcut.isRegistered(shortcut.cmd)){
            globalShortcut.unregister(shortcut.cmd)
            return true;
        }

        //启用快捷键
        if(shortcut.isOpen === true && !globalShortcut.isRegistered(shortcut.cmd)){
            globalShortcut.register(shortcut.cmd, this[shortcut.name].bind(this))
            return true;
        }
        return true;
    }

    updateShortcut(shortcut, oldShortcut){
        if(globalShortcut.isRegistered(shortcut.cmd)){
            return false;
        }
        globalShortcut.unregister(oldShortcut.cmd)
        globalShortcut.register(shortcut.cmd, this[shortcut.name].bind(this))
        return true;
    }

    softwareExit(){
        trayManager.reallyQuitApp();
    }

    softwareWindowVisibilityController(){
        trayManager.toggleWindow();
    }
    softwareSetting(){
        trayManager.autoClickSettings()
    }

    windowTopmostToggle(){
        let win = windowManager.getWindow();
        win.isAlwaysOnTop() ? win.setAlwaysOnTop(false) : win.setAlwaysOnTop(true);
    }

    softwareSiteSwitch(){
        const view = viewManager.getActiveView();
        lokiManager.then((manager) => {
            const openMenus = manager.getMenus().openMenus;
            let idx = openMenus.findIndex(item => item.name === view.name);
            if(openMenus.length === (idx+1))  idx= -1;

            let menuView = windowManager.getMenuView();
            menuView.webContents.send('auto:click', openMenus[idx+1]);
        })
    }

    restoreDefaultWindow(){
        let win = windowManager.getWindow()
        const [width, height] = win.getSize();

        if(width === CONS.SIZE.WIDTH && height === CONS.SIZE.HEIGHT){
            win.maximize();
        }else{
            if(win.isMaximized()) win.unmaximize();
            if(!win.isVisible()) win.show();
            win.setSize(CONS.SIZE.WIDTH, CONS.SIZE.HEIGHT, true);
            win.center();
        }
    }

    currentPageRefresher(){
        const view = viewManager.getActiveView();
        if(view) view.object.webContents.reload();
    }

    windowMinimize(){
        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.isMinimized() ? win.restore() : win.minimize();
    }

    windowMaximizer(){
        let win = windowManager.getWindow();
        win.isMaximized() ? win.restore() : win.maximize();
    }

    leftScreenMiniWindow(){
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;
        let win = windowManager.getWindow();

        if(win.isMaximized()) win.unmaximize();
        if(!win.isVisible()) win.show();
        win.setBounds({x:0, y:0, width:width/3, height:height})
    }

    rightScreenMiniWindow(){
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;
        let win = windowManager.getWindow();

        if(win.isMaximized()) win.unmaximize();
        if(!win.isVisible()) win.show();
        let winWidth = width/3;
        win.setBounds({x:width-winWidth, y:0, width:winWidth, height:height})
    }

    openDevTools(){
        globalShortcut.register('CommandOrControl+Shift+I', () => {
            const view = viewManager.getActiveView();
            if(view.object.webContents.isDevToolsOpened()){
                view.object.webContents.closeDevTools();
            }else{
                view.object.webContents.openDevTools({mode: 'detach'});
            }
        });
    }

    forceSystemExit(){
        globalShortcut.register('CommandOrControl+Shift+Q', () => {
            app.exit()
        });
    }

    unregisterAll(){
        this.destroy();
    }

    destroy(){
        globalShortcut.unregisterAll();
    }
}

module.exports = new ShortcutManager();