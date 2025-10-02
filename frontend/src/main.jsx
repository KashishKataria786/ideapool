import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import NoInternet from './components/ui/NoInternet.jsx'
import {ToastContainer} from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <ToastContainer
        position="top-right"        
        autoClose={1000}           
        hideProgressBar={true}    
        newestOnTop={true}          
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme=""                
      />
  <NoInternet/>
  <StrictMode>
    <App />
  </StrictMode>  
  </BrowserRouter>,
)
