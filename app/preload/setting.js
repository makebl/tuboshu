const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    exportConfig: () => ipcRenderer.invoke('export:config'),
    importConfig: () => ipcRenderer.invoke('import:config'),
    getConfig: () => ipcRenderer.invoke('get:menu'),
    getShortcuts: () => ipcRenderer.invoke('get:shortcuts'),
    getVersion: () => ipcRenderer.invoke('get:version'),
    getSettings: () => ipcRenderer.invoke('get:settings'),
    getFavicon: (name) => ipcRenderer.invoke('get:favicon', name),
    openSite: (site) => ipcRenderer.send('open:site', site),

    updateShortcut: (shortcut) => ipcRenderer.invoke('update:shortcut', shortcut),
    updateMenu: (menu) => ipcRenderer.send('update:menu', menu),
    batchMenus: (menus) => ipcRenderer.send('batch:menus', menus),
    addMenu: (menu) => ipcRenderer.send('add:menu', menu),
    removeMenu: (menu) => ipcRenderer.send('remove:menu', menu),
    updateSetting: (setting) => ipcRenderer.send('update:setting', setting),
});