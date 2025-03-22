const tld = require('tldjs');

class Utility {

    constructor() {
    }

    static isMainDomainEqual (url1, url2) {
        return tld.getDomain(url1.toLowerCase()) === tld.getDomain(url2.toLowerCase());
    }

    static getHostName (url) {
        return tld.parse(url.toLowerCase()).hostname
    }
    static appendJsCode(code) {
        return `(function() {
            try {
                const scriptElement = document.createElement('script');
                scriptElement.textContent = ${code};
                document.head.appendChild(scriptElement);
            } catch (e) {
                console.error('Script injection failed:', e);
            }
        })();`
    }

    static resetUserAgentForGoogle(view){
        const session = view.webContents.session;
        session.webRequest.onBeforeSendHeaders(null);
        session.webRequest.onBeforeSendHeaders((details, callback) => {
            if(details.url.includes("google")){
                details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) tuboshu/v1.2.1 Chrome/132.0.6834.210 Electron/34.3.2 Safari/537.36';
            }
            callback({ requestHeaders: details.requestHeaders });
        });
    }
}

module.exports = {
    Utility
}





