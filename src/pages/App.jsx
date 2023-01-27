import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './Login'
import Principal from './Principal'
import Reportes from './Reportes'
function App() {
  return (
    <BrowserRouter basename='/pt-portal-web'>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/main" element={<Principal/>} />
        <Route path="/rep" element={<Reportes/>} />
        </Routes>
     </BrowserRouter>
  )
}

export default App