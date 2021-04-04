import '../styles/globals.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/rootReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={createStore(rootReducer, devToolsEnhancer())}>
      <Component {...pageProps} />
    </Provider>
  )  
}

export default MyApp
