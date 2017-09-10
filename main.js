/* eslint global-require: 0 */
const path = require('path')
const url = require('url')
const {app, BrowserWindow} = require('electron')

let mainWindow = null
const HEIGHT = 500
const WIDTH = 500

const createWindow = () => {
  mainWindow = new BrowserWindow({
    backgroundColor: '#F94E15',
    center: true,
    fullscreenable: false,
    height: HEIGHT,
    maxHeight: HEIGHT,
    maxWidth: WIDTH,
    maximizable: false,
    minHeight: HEIGHT,
    minWidth: WIDTH,
    width: WIDTH
  })
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  require('./app/main-menu')
  require('./app/main-tray-menu')
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
