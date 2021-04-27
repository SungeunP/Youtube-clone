import '../styles/globals.css'
import rootReducer from '../redux/rootReducer'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )  
}

export default rootReducer.withRedux(MyApp)
