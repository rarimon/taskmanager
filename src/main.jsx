import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../src/assets/css/admin.css'
import {Provider} from "react-redux";
import store from  '../src/redux/store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </StrictMode>,
)
