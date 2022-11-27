import { BrowserWindow, ipcMain } from "electron"


export const initWinEvent = (app, mainWindow)=>{
    ipcMain.on("minimizeMainWindow", ()=>{
        mainWindow.minimize()
    })
    ipcMain.on("maximizeMainWindow",()=>{
        if(mainWindow.isMaximized()){
            mainWindow.unmaximize()
        }else{
            mainWindow.maximize()
        }
    })
    ipcMain.on("closeMainWindow", ()=>{
        mainWindow.close()
    })
}