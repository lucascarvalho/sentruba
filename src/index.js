import 'main.scss'
import configureStore, {history} from './store'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

export const store = configureStore()

ReactDOM.render(
  <Routes
    history={history}
    store={store}
  />,
  document.getElementById('app')
)
