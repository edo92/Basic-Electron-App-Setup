import { ipcMain } from 'electron';
import { IBrowser } from './browser';

export const ipcRequest = (win: IBrowser): void => {
   ipcMain.on('remote:id', async (_, res) => {
      return
   });
};
