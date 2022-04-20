import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/app/app.component'
import Loader from './components/loader/loader.coponent'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import store, { persistor } from './redux/store'
import { CustomRouter } from './utils/custom-router'
import customHistory from './utils/custom-history'


window.store = store // DEV ONLY

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={<Loader/>} persistor={persistor}>
            <CustomRouter history={customHistory}>
               <App />
            </CustomRouter>
         </PersistGate>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
)

serviceWorkerRegistration.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()