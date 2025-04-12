import { app} from 'electron'
import path from 'path'
import windowManager from './windowManager.js'
import trayManager from'./trayManager.js'
import shortcutManager from './shortcut/shortcutManager.js'

// app.disableHardwareAcceleration();
//app.commandLine.appendSwitch('disable-gpu');
//app.commandLine.appendSwitch('disable-webrtc');
app.commandLine.appendSwitch('disable-software-rasterizer');
app.commandLine.appendSwitch('ignore-certificate-errors');

app.commandLine.appendSwitch("disable-features", "WebRtcHideLocalIpsWithMdns");
app.commandLine.appendSwitch("force-webrtc-ip-handling-policy", "disable_non_proxied_udp");
app.commandLine.appendSwitch('lang', 'zh-CN');

app.commandLine.appendSwitch('disable-blink-features', 'AutomationControlled')
app.commandLine.appendSwitch('disable-features', 'IsolateOrigins,site-per-process')


if(process.env.PORTABLE_EXECUTABLE_DIR){
  app.setPath('userData', path.join(process.env.PORTABLE_EXECUTABLE_DIR, 'tuboshu-user-data'))
}

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
  trayManager.destroyTray();
})

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') app.quit()
  app.quit()
})

app.on('activate', () => {
  if (!windowManager.getWindow()) {
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

process.on('uncaughtException', (err) => {
  console.error('主进程崩溃:', err);
});