/* eslint no-ternary: 0
          no-process-env: 0 */
const {Menu, app, shell} = require('electron')
const FIRST_INDEX = 1
const SECOND_INDEX = 2
const WINDOW_MENU_INDEX = 2
const template = [
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        click () {
          shell.openExternal('http://electron.atom.io')
        },
        label: 'Learn More'
      }
    ]
  }
]

if (process.platform === 'darwin') {
  const name = app.getName()
  template.unshift({
    label: name,
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {
        role: 'services',
        submenu: []
      },
      {type: 'separator'},
      {role: 'hide'},
      {role: 'hideothers'},
      {role: 'unhide'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })

  template[WINDOW_MENU_INDEX].submenu = [
    {
      accelerator: 'CmdOrCtrl+W',
      label: 'Close',
      role: 'close'
    },
    {
      accelerator: 'CmdOrCtrl+M',
      label: 'Minimize',
      role: 'minimize'
    },
    {
      label: 'Zoom',
      role: 'zoom'
    },
    {type: 'separator'},
    {
      label: 'Bring All to Front',
      role: 'front'
    }
  ]
}

if (process.env.NODE_ENV === 'development') {
  template.splice(FIRST_INDEX, 0, {
    label: 'Edit',
    submenu: [
      {role: 'redo'},
      {role: 'undo'},
      {type: 'separator'},
      {role: 'cut'},
      {role: 'copy'},
      {role: 'paste'},
      {role: 'pasteandmatchstyle'},
      {role: 'delete'},
      {role: 'selectall'}
    ]
  })
  template.splice(SECOND_INDEX, 0, {
    label: 'View',
    submenu: [
      {
        accelerator: 'CmdOrCtrl+R',
        click (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.reload()
          }
        },
        label: 'Reload'
      },
      {
        accelerator: process.platform === 'darwin' ?
          'Alt+Command+I' :
          'Ctrl+Shift+I',
        click (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.webContents.toggleDevTools()
          }
        },
        label: 'Toggle Developer Tools'
      },
      {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      {type: 'separator'},
      {role: 'togglefullscreen'}
    ]
  })
}
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
