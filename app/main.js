const { app, BaseWindow} = require('electron')
const windowManager = require('./windowManager');
const trayManager = require('./trayManager');
const shortcutManager = require('./shortcutManager');

// app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('disable-extensions');

app.isQuitting = false;
const singleLock = app.requestSingleInstanceLock();

app.whenReady().then(() => {
  if (!singleLock) return app.quit();
  windowManager.createWindow();
  trayManager.createTray();
  shortcutManager.initShortcuts();
})

app.on('will-quit', () => {
  shortcutManager.unregisterAll();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BaseWindow.getAllWindows().length === 0) {
    windowManager.createWindow();
  }
})

app.on('second-instance', () => {
  windowManager.getWindow().show();
})

app.on('render-process-gone', (event, webContents, details) => {
  if (details.reason === 'crashed') {
    windowManager.getMenuView().webContents.reload();
  }
});

// 添加进程异常处理
process.on('unhandledRejection', (error) => {
  console.error('未处理的Promise拒绝:', error)
})