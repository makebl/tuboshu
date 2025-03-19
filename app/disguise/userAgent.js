const os = require('os');

class UserAgent {
    constructor() {
        this.ua = this.generateStealthUserAgent();
    }
    #getWindowsPlatform() {
        const arch = os.arch();
        const [major, minor, build] = os.release().split('.').map(Number);

        const isWindows11 = build >= 22000;
        const versionString = isWindows11 ? 'Windows NT 10.0; Win64' : `Windows NT ${major}.${minor}`;

        // ARM架构处理
        const archMap = {
            x64: 'x64',
            arm64: 'ARM64',
            ia32: 'WOW64'
        };
        return `${versionString}; ${archMap[arch] || 'x64'}`;
    }

    #getMacPlatform() {
        const arch = os.arch();
        const release = os.release().split('.');
        const darwinVersion = parseInt(release[0]);

        // Darwin版本转macOS版本（精确映射）
        const macosMajor = Math.max(darwinVersion - 4, 10); // Darwin 21 → macOS 12
        const subVersions = release.slice(1, 3).join('_');

        // Apple Silicon识别
        const chipType = arch === 'arm64' ? 'Apple Silicon' : 'Intel';

        return `${chipType} Mac OS X ${macosMajor}_${subVersions || '0'}`;
    }

    #getLinuxPlatform() {
        const arch = os.arch();
        const archMap = {
            x64: 'x86_64',
            arm: 'armv7l',
            arm64: 'aarch64',
            ppc64: 'ppc64le',
            s390x: 's390x'
        };

        return `Linux ${archMap[arch] || 'unknown'}`;
    }

    getPlatformInfo() {
        const platform = os.platform();

        if (platform === 'win32') {
            return `(${this.#getWindowsPlatform()})`;
        }

        if (platform === 'darwin') {
            return `(Macintosh; ${this.#getMacPlatform()})`;
        }

        return `(X11; ${this.#getLinuxPlatform()})`;
    }

    generateStealthUserAgent() {
        const platformInfo = this.getPlatformInfo();
        return `Mozilla/5.0 ${platformInfo} AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${process.versions.chrome} Safari/537.36`;
    }
}

module.exports = new UserAgent();