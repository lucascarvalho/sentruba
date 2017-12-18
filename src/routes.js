import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import React from 'react'
import Welcome from './welcome'

const Routes = ({store, history}) =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          component={Welcome}
          path="/"
        />
      </Switch>
    </ConnectedRouter>
  </Provider>

Routes.propTypes = {
  history: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired
}
export default Routes
