import { combineReducers, configureStore } from '@reduxjs/toolkit'
import recordReducer from './reducers/record-reducer'

const rootReducer = combineReducers({
  recordReducer,
})

export const store = configureStore({
  'reducer': rootReducer,
})
