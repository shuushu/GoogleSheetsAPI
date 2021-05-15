import { combineReducers } from 'redux'
import { reqState, sessionCheck } from './reducers'

export default combineReducers({
    reqState,
    sessionCheck
});