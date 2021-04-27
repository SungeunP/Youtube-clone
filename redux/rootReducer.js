import { createWrapper } from 'next-redux-wrapper'
import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import globalVideoPlayer from './reducers/globalVideoPlayer'
import wrapper from './reducers/wrapper'

const combinedReducers = combineReducers({
  globalVideoPlayer,
  wrapper
})

const makeStore = () => { return createStore(combinedReducers, devToolsEnhancer()) }

export default createWrapper(makeStore, {debug: true})