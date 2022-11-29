import { app, BrowserWindow, ipcMain } from 'electron'
import '../renderer/store'
import { initWinEvent } from './WinEvent'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
console.log(123);
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    minWidth:800,
    // height: 563,
    useContentSize: true,
    frame:false,
    transparent:true
  })

  mainWindow.loadURL(winURL)
  mainWindow.setMinimumSize(800, 700)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  initWinEvent(app, mainWindow)
}
app.on('ready', createWindow)
console.log("finis");
app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
    app.quit()
}
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})


/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
