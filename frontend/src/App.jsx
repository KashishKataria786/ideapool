import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import IdeasPage from './pages/IdeasPage.jsx'
import Notfound from './components/ui/Notfound.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<LandingPage/>}/>
      <Route path='/ideas' element={<IdeasPage/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default App
