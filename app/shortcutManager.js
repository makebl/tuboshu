const { globalShortcut, screen} = require('electron');
const windowManager = require('./windowManager');
const trayManager = require('./trayManager');
const viewManager = require('./viewManager');
const lokiManager = require('./lokiManager');

// 在 Electron 中，你可以通过简单的字符串组合来定义一系列的快捷键。
// 这些字符串是由一个或多个由加号(+)连接的修饰键和一个键（key）组成。
// 修饰键包括 Command (或 Cmd 代表 macOS 的 Command 键),
// Control (或 Ctrl), CommandOrControl (或 CmdOrCtrl), Alt, 和 Shift。
// 键可以是单个字符（比如 A 到 Z）,数字 (0 到 9),功能键 (F1 到 F24),
// 或其他特殊键 (Backspace, Tab, Enter, Esc 等)。
// 组合快捷键的时候，按照下面的方式去写：
// 复制：CommandOrControl+C
// 粘贴：CommandOrControl+V
// 剪切：CommandOrControl+X
// 撤销：CommandOrControl+Z
// 重做：CommandOrControl+Shift+Z 或 CommandOrControl+Y
// 保存：CommandOrControl+S
// 新建：CommandOrControl+N
// 打开：CommandOrControl+O
// 关闭当前窗口：CommandOrControl+W
// 你也可以组合多个修饰键：
// 示例：CommandOrControl+Shift+Option+J (在 macOS 上 Option 是 Alt 键)
function initShortcut() {

    //显示/隐藏
    globalShortcut.register('CommandOrControl+H', () => {
        trayManager.toggleWindow();
    });

    //真实退出
    globalShortcut.register('CommandOrControl+Q', () => {
        trayManager.reallyQuitApp();
    });

    //刷新当前页面
    globalShortcut.register('CommandOrControl+R', () => {
        const view = viewManager.getActiveView();
        if(view) view.object.webContents.reload();
    });

    //循环选择站点
    globalShortcut.register('CommandOrControl+Tab', () => {
        const view = viewManager.getActiveView();
        lokiManager.then((manager) => {
            const openMenus = manager.getMenus().openMenus;
            let idx = openMenus.findIndex(item => item.url === view.url);
            if(openMenus.length === (idx+1))  idx= -1;

            let menuView = windowManager.getMenuView();
            menuView.webContents.send('auto:click', openMenus[idx+1]);
        })
    });

    //是否置顶
    globalShortcut.register('CommandOrControl+T', () => {
        let win = windowManager.getWindow();
        win.isAlwaysOnTop() ? win.setAlwaysOnTop(false) : win.setAlwaysOnTop(true);
    });

    //复原显示
    globalShortcut.register('CommandOrControl+O', () => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.setSize(1024, 768, true);
        win.setPosition((width/2-1024/2), (height/2-768/2), true)
        if(!win.isVisible()) win.show();
    });

    //最小化窗口
    globalShortcut.register('CommandOrControl+[', () => {
        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.isMinimized() ? win.restore() : win.minimize();
    });

    //最大化窗口
    globalShortcut.register('CommandOrControl+]', () => {
        let win = windowManager.getWindow();
        win.isMaximized() ? win.restore() : win.maximize();
    });

    //屏幕左侧显示
    globalShortcut.register('CommandOrControl+,', () => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.setSize(width/2, height+8, true);
        win.setPosition(0, 0, true)
        if(!win.isVisible()) win.show();
    });

    //屏幕右侧显示
    globalShortcut.register('CommandOrControl+.', () => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.setSize(width/2, height+8, true);
        win.setPosition(width/2, 0, true);
        if(!win.isVisible()) win.show();
    });

    //屏幕右侧显示
    globalShortcut.register('CommandOrControl+Right', () => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.setSize(width/3, height+8, true);
        win.setPosition((width - (width / 3)+8), 0, true)
        if(!win.isVisible()) win.show();
    });

    //屏幕左侧显示
    globalShortcut.register('CommandOrControl+Left', () => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.setSize(width/3, height+8, true);
        win.setPosition(-8, 0, true)
        if(!win.isVisible()) win.show();
    });

    //屏幕左侧显示
    globalShortcut.register('CommandOrControl+Up', () => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.setSize(width, height/2, true);
        win.setPosition(0, 0, true);
        if(!win.isVisible()) win.show();
    });

    globalShortcut.register('CommandOrControl+Down', () => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;

        let win = windowManager.getWindow();
        if(win.isMaximized()) win.unmaximize();
        win.setSize(width, height/2, true);
        win.setPosition(0, height/2, true);
        if(!win.isVisible()) win.show();
    });
}

module.exports = {
    initShortcut
}