import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Principal from './Principal'
import Reportes from './Reportes'
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/pt-portal-web" element={<Login/>} />
        <Route path="/pt-portal-web/principal" element={<Principal/>} />
        <Route path="/pt-portal-web/reportes" element={<Reportes/>} />
        </Routes>
     </BrowserRouter>
  )
}

export default App