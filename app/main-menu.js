const {Menu, app, shell} = require('electron')
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

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
