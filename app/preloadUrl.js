const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    getConfig: () => ipcRenderer.invoke('get:menu'),
    getShortcuts: () => ipcRenderer.invoke('get:shortcuts'),
    getVersion: () => ipcRenderer.invoke('get:version'),
    getCustom: () => ipcRenderer.invoke('get:custom'),
    updateShortcut: (shortcut) => ipcRenderer.invoke('update:shortcut', shortcut),
    copyText: (text) => ipcRenderer.send('copy:text', text),
    updateMenu: (menu) => ipcRenderer.send('update:menu', menu),
    batchMenus: (menus) => ipcRenderer.send('batch:menus', menus),
    addMenu: (menu) => ipcRenderer.send('add:menu', menu),
    removeMenu: (menu) => ipcRenderer.send('remove:menu', menu),
    updateCustom: (custom) => ipcRenderer.send('update:custom', custom),
    //getScripts: (url) => ipcRenderer.invoke('get:scripts', url),
});

//window.addEventListener('DOMContentLoaded', () => {})