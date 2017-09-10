/* global __dirname */
const {Tray} = require('electron')
const path = require('path')
const {platform} = process
const imageFolder = path.join(__dirname, '/assets/images')

let trayImage = null
if (platform === 'darwin') {
  trayImage = path.join(imageFolder, 'osx/tray.png')
} else if (platform === 'win32') {
  trayImage = path.join(imageFolder, 'win/tray.ico')
}

const appIcon = new Tray(trayImage)

if (platform === 'darwin') {
  appIcon.setPressedImage(path.join(imageFolder, 'osx/tray.png'))
}
