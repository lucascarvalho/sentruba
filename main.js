const path = require('path')
const url = require('url')
const {app, BrowserWindow} = require('electron')

let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

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
