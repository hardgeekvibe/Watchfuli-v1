import { combineReducers } from 'redux'
import authReducer from './authReducer'
import appReducer from './appReducer'
import messageReducer from './messageReducer'
import adminReducer from './adminReducer'
import reportReducer from './reportReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    mess: messageReducer,
    admin: adminReducer,
    report: reportReducer
})

export default rootReducer