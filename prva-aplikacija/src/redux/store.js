// global state / redux state
// store is an object

// ACTIONS - they initiate the change
// REDUCERS - they save the change in the store

import { createStore } from 'redux'
import { counterReducer } from './counter/counter'


const store = createStore(counterReducer)

console.log(store.getState())

export default store