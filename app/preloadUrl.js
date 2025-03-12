const { contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('myApi', {
    getConfig: () => ipcRenderer.invoke('get:menu').then(data => data),
    copyText: (text) => ipcRenderer.send('copy:text', text),
    updateMenu: (menu) => ipcRenderer.send('update:menu', menu),
    batchMenus: (menus) => ipcRenderer.send('batch:menus', menus),
    addMenu: (menu) => ipcRenderer.send('add:menu', menu),
    removeMenu: (menu) => ipcRenderer.send('remove:menu', menu)
});

// ipcRenderer.on('force:redraw', () => {
//     window.dispatchEvent(new Event('resize'));
//     document.body.style.opacity = '0.99';
//     requestAnimationFrame(() => {
//         document.body.style.opacity = '1';
//     });
// });
window.addEventListener('DOMContentLoaded', () => {})