/* global SENTRY_DSN */
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

console.log('SENTRY_DSN', SENTRY_DSN) // eslint-disable-line no-console
window.Raven.config(SENTRY_DSN).install()
