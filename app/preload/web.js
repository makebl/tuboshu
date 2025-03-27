const { contextBridge, ipcRenderer} = require('electron');
ipcRenderer.on('open:window', (event, url) => {
    window.location.href = url;
});

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const selectionText = window.getSelection().toString().trim();
    if (selectionText) {
        ipcRenderer.send('copy:text', selectionText)
    }else{
        ipcRenderer.send('copy:text', window.location.href)
    }
});

window.addEventListener('keydown', (event) => {
    const isInputElement = ['INPUT', 'TEXTAREA'].includes(event.target.tagName);
    const isContentEditable = event.target.isContentEditable;

    if (isInputElement || isContentEditable) {
        return;
    }

    if(event.key === "ArrowLeft"){
        history.back();
    }else if (event.key === "ArrowRight"){
        history.forward();
    }
});

document.addEventListener('wheel', (event) => {
    if (event.ctrlKey|| event.metaKey) {
        event.preventDefault();
        const delta = event.deltaY;
        ipcRenderer.send('zoom:wheel', delta);
    }
}, { passive: false });