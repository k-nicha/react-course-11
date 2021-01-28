// global state / redux state
// store is an object

// ACTIONS - they initiate the change
// REDUCERS - they save the change in the store

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { counterReducer } from './counter/counter'
import logger from 'redux-logger'
import { loginReducer } from './login/login'

const allReducers = combineReducers({
  counterReducer, // { counter: 0 }
  loginReducer, // { username: '', password: '' }
})

const store = createStore(allReducers, applyMiddleware(logger))

export default store