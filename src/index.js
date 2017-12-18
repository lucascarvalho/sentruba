import configureStore, {history} from './store'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

export const store = configureStore()

const App = () =>
  <AppContainer>
    <Routes
      history={history}
      store={store}
    />
  </AppContainer>

if (module.hot) {
  module.hot.accept('./routes', () => {
    const RoutesContainer = require('./routes').default //  eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <RoutesContainer
          history={history}
          store={store}
        />
      </AppContainer>,
      document.getElementById('app')
    )
  })

  // Accept css modifications
  module.hot.accept()
}

ReactDOM.render(<App />, document.getElementById('app'))
