import {createStore} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'
import {messageReducer} from './Msg/message.reducer'
import {rootReducer} from './rootReducer'

let store = createStore(rootReducer,composeWithDevTools())
//let store = createStore(messageReducer,composeWithDevTools())
export {store}