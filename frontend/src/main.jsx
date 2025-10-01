import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import NoInternet from './components/ui/NoInternet.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NoInternet/>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
