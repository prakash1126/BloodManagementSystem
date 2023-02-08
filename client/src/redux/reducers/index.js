import { combineReducers } from 'redux'
import { userReducer } from './userReducer'

export const allReducers=combineReducers({
    users:userReducer
})