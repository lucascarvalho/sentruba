/* global module, require */
/* eslint no-underscore-dangle: 0 */
import {applyMiddleware, compose, createStore} from 'redux'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'
import {routerMiddleware} from 'react-router-redux'

export const history = createHistory()
const router = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(router))

export default function configureStore (initialState) {
  const store = createStore(reducers, initialState, enhancer)

  if (module.hot) {
    // eslint-disable-next-line global-require
    module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default))
  }

  return store
}
