import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({
  form: formReducer,
  routing: routerReducer
})

export default reducers
