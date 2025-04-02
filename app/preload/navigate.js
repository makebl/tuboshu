// import { contextBridge, ipcRenderer} from 'electron'
const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    getConfig: () => ipcRenderer.invoke('get:menu'),
    openUrl: (url, name) => ipcRenderer.send('reload:url', url, name),
    autoClick: (callback) => ipcRenderer.on('auto:click',  (event, data) => {
        ipcRenderer.send('reload:url', data.url, data.name);
        callback(data);
    }),
});

window.addEventListener('DOMContentLoaded', () => {})