const tld = require('tldjs');
const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');
const userAgent = require('./../disguise/userAgent');

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

    static getInjectPluginJsCode() {
        const pluginDir = join(__dirname, './../plugin');
        const jsFiles = readdirSync(pluginDir)
            .filter(file => file.endsWith('.plugin.js'))
            .sort();

        let combinedCode = '';
        for (const file of jsFiles) {
            try {
                const filePath = join(pluginDir, file);
                combinedCode += readFileSync(filePath, 'utf-8');
            } catch (err) {
                console.error(`fail ${file}:`, err);
            }
        }
        return combinedCode;
    }

    static alterRequestHeader(view){
        const platform = userAgent.getPlatformInfo();
        const session = view.webContents.session;
        session.webRequest.onBeforeSendHeaders(null);
        session.webRequest.onBeforeSendHeaders((details, callback) => {
            const domains = ['google', 'grok', 'x.ai', 'cloudflare'];
            if(domains.some(domain => details.url.toLowerCase().includes(domain))){
                details.requestHeaders['User-Agent'] = `Mozilla/5.0 ${platform} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.6834.210 Electron/34.3.2 Safari/537.36`;
            }
            callback({ requestHeaders: details.requestHeaders });
        });
    }

    static alterResponseHeader(view){
        const session = view.webContents.session;
        session.webRequest.onHeadersReceived((details, callback) => {
            const cspHeader = {
                name: 'content-security-policy',
                value: "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:"
            };

            const domains = ['yuque.com'];
            if(domains.some(domain => details.url.toLowerCase().includes(domain))){
                details.responseHeaders[cspHeader.name] = cspHeader.value;
            }
            callback({ responseHeaders: details.responseHeaders });
        });
    }
}

module.exports = {
    Utility
}





