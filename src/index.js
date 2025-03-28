//chat said use import.meta.url to get rid of UnhandledPRomiseRejectionWarning: ReferenceError: __dirname is not defined at createWindow
//you can also use require() which is in the Fireship tutorial
import { app, BrowserWindow, ipcMain } from 'electron';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // Use __dirname to load a local file
  mainWindow.loadFile(`${__dirname}/index.html`);
}

app.whenReady().then(createWindow);

ipcMain.on('close-window', () => {
  const window = BrowserWindow.getFocusedWindow();
  window.close();
});

ipcMain.on('minimize-window', () => {
  const window = BrowserWindow.getFocusedWindow();
  window.minimize();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});





// import { app, BrowserWindow } from 'electron';
// import path from 'node:path';
// import started from 'electron-squirrel-startup';

// // Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (started) {
//   app.quit();
// }

// const createWindow = () => {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//     },
//   });

//   // and load the index.html of the app.
//   mainWindow.loadFile(path.join(__dirname, 'index.html'));

//   // Open the DevTools.
//   mainWindow.webContents.openDevTools();
// };

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => {
//   createWindow();

//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow();
//     }
//   });
// });

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// // In this file you can include the rest of your app's specific main process
// // code. You can also put them in separate files and import them here.
