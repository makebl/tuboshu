const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    getConfig: () => ipcRenderer.invoke('get:menu').then(data => data),
    getShortcuts: () => ipcRenderer.invoke('get:shortcuts').then(data => data),
    getVersion: () => ipcRenderer.invoke('get:version'),
    updateShortcut: (shortcut) => ipcRenderer.invoke('update:shortcut', shortcut).then(data => data),
    copyText: (text) => ipcRenderer.send('copy:text', text),
    updateMenu: (menu) => ipcRenderer.send('update:menu', menu),
    batchMenus: (menus) => ipcRenderer.send('batch:menus', menus),
    addMenu: (menu) => ipcRenderer.send('add:menu', menu),
    removeMenu: (menu) => ipcRenderer.send('remove:menu', menu)
});

window.addEventListener('DOMContentLoaded', () => {})