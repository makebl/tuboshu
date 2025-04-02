import { FingerprintGenerator } from 'fingerprint-generator'

// 生成浏览器指纹

class FingerPrint {
    constructor() {
        this.fingerPrint = new FingerprintGenerator();

    }

    getFinger() {
        const { fingerprint, headers } = this.fingerPrint.getFingerprint({
            devices: ['desktop'],
            operatingSystems: ['windows'],
            browsers: ['chrome'],
            locales: ['zh-CN']
        });

        return {
            fingerprint,
            headers
        };
    }
 }

// 导出给预加载脚本使用
export default new FingerPrint();