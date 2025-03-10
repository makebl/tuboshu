const { Tray, Menu, app, shell} = require('electron');
const CONS = require('./constants');
const windowManager = require('./windowManager');

function createTray() {
    const tray = new Tray(CONS.PATH.APP_PATH + '/icon.ico');
    const contextMenu = Menu.buildFromTemplate([
        { label: '官网', type: 'normal', click:openWebsite},
        { label: '当前版本', type: 'normal' },
        { label: '检测更新', type: 'normal' },
        { label: '设置', type: 'normal', click:autoClickSettings},
        { label: '显示/隐藏', type: 'normal', click:toggleWindow },
        { label: '退出', type: 'normal', click:reallyQuitApp}
    ]);

    tray.setToolTip("土拨鼠");
    tray.setContextMenu(contextMenu);
    tray.on('click', toggleWindow);
}

function openWebsite(){
    shell.openExternal('https://shaziai.com').finally();
}

function autoClickSettings(){
    let win = windowManager.getWindow();
    win.isVisible() ? win.hide():win.show();

    let menuView = windowManager.getMenuView();
    menuView.webContents.send('auto:click', CONS.SETTING[0]);
}

function reallyQuitApp() {
    app.isQuitting = true;
    app.quit();
}

function toggleWindow() {
    let win = windowManager.getWindow();
    win.isVisible() ? win.hide():win.show();
}

module.exports = {
    createTray,
    toggleWindow,
    reallyQuitApp,
    openWebsite
};