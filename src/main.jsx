import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import contactReducer from './Components/Redux/Reducer/contactReducer';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
  contactReducer : contactReducer
})

const store = configureStore ({
  reducer : rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
