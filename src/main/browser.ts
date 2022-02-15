import { BrowserWindow } from 'electron';
import * as path from 'path';

export interface IBrowser {
   createWindow(): void;
   active: boolean | null;
   mainWindow: Electron.BrowserWindow | null;
}

export default class Browser implements IBrowser {
   public active: boolean | null = null;
   public mainWindow!: Electron.BrowserWindow | null;

   public createWindow(): void {
      this.active = true;

      this.mainWindow = this.createBrowser();

      if (process.env.NODE_ENV === 'development') {
         this.mainWindow.loadURL('http://localhost:4000');
      } else {
         this.mainWindow.loadURL(path.resolve('public/index.html'));
      }

      this.mainWindow.on('closed', () => {
         this.active = null;
         this.mainWindow = null;
      });
   }

   private createBrowser(): BrowserWindow {
      return new BrowserWindow({
         width: 1100,
         height: 700,
         backgroundColor: '#f2f2f2',
         webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: process.env.NODE_ENV !== 'production',
         },
      });
   }
}
