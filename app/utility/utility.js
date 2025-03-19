const tld = require('tldts');

class Utility {

    constructor() {
    }

    static isMainDomainEqual (url1, url2) {
        return tld.getDomain(url1) === tld.getDomain(url2);
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
}


module.exports = {
    Utility
}





