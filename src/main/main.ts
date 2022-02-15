import { app } from 'electron';
import { ipcRequest } from './ipc';
import BrowserWindow from './browser';

const win = new BrowserWindow();

app.on('ready', async () => {
   await win.createWindow();
   ipcRequest(win);
});

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') {
      app.quit();
   }
});

app.on('activate', () => {
   if (win.active === null) {
      win.createWindow();
   }
});
