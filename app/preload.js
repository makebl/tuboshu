const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    getConfig: () => ipcRenderer.invoke('get:menu').then(data => data),
    openUrl: (url, tag) => ipcRenderer.send('reload:url', url, tag),
    copyText: (text) => ipcRenderer.send('copy:text', text),
    autoClick: (callback) => ipcRenderer.on('auto:click',  (event, data) => {
        ipcRenderer.send('reload:url', data.url, data.tag);
        callback(data);
    }),
});

window.addEventListener('DOMContentLoaded', () => {})