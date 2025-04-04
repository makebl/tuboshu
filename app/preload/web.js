const { contextBridge, ipcRenderer}  = require('electron');

// const args = process.argv;
// const index = args.indexOf('--name');
// const fingerPrint = JSON.parse(index !== -1 ? args[index + 2] : null);

//
// Object.defineProperties(navigator, {
//     //appVersion:{get:()=> fingerPrint.navigator.appVersion},
//     userAgent: {get:()=> fingerPrint.navigator.userAgent},
//     userAgentData:{get:()=> fingerPrint.navigator.userAgentData},
//     languages: {get:()=> fingerPrint.navigator.languages},
//     webdriver: {get:()=> fingerPrint.navigator.webdriver},
//     platform: {get:()=> fingerPrint.navigator.platform}
// })
// Object.defineProperties(screen, {
//     width:{value: fingerPrint.screen.width},
//     height:{value: fingerPrint.screen.height},
// })
//
// Object.defineProperty(navigator, 'appVersion', {
//     value: fingerPrint.navigator.appVersion
// })
// Object.defineProperty(navigator, 'userAgent', {
//     value: fingerPrint.navigator.userAgent
// })
// Object.defineProperty(navigator, 'userAgentData', {
//     value: fingerPrint.navigator.userAgentData
// })


contextBridge.exposeInMainWorld('myApi', {
    refreshSelf: () => ipcRenderer.invoke('refresh:self')
})
ipcRenderer.on('open:window', (event, url) => {
    window.location.href = url;
});
window.addEventListener('DOMContentLoaded', () => {})

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

document.addEventListener('wheel', async (event) => {
    if (event.ctrlKey|| event.metaKey) {
        const isZoomOpen = await ipcRenderer.invoke("handle:zoom");
        if(isZoomOpen){
            event.preventDefault();
            const delta = event.deltaY;
            ipcRenderer.send('zoom:wheel', delta);
        }
    }
}, { passive: false });

document.addEventListener('fullscreenchange', async () => {
    if (document.fullscreenElement) {
        await ipcRenderer.invoke('handle:menu', true)
    } else {
        await ipcRenderer.invoke('handle:menu', false)
    }
});