import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import logger from 'redux-logger'

const initialState = { things:{ all: [] }}
const middleware = [
    logger,
    thunk,
]

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store