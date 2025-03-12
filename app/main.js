const { app, globalShortcut} = require('electron')
const windowManager = require('./windowManager');
const trayManager = require('./trayManager');
const shortcutManager = require('./shortcutManager');

app.isQuitting = false;
// app.disableHardwareAcceleration();
const singleLock = app.requestSingleInstanceLock();
app.whenReady().then(() => {
  if (!singleLock) return app.quit();
  windowManager.createWindow();
  trayManager.createTray();
  shortcutManager.initShortcut();
})


app.on('will-quit', () => {
  globalShortcut.unregisterAll();
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  windowManager.getWindow().show();
})

// 添加进程异常处理
process.on('unhandledRejection', (error) => {
  console.error('未处理的Promise拒绝:', error)
})