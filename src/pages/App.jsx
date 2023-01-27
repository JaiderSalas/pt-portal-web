import React from 'react'
import {HashRouter,Route, Routes} from 'react-router-dom'
import Login from './Login'
import Principal from './Principal'
import Reportes from './Reportes'
function App() {
  return (
    <HashRouter basename='/pt-portal-web/'>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/main" element={<Principal/>} />
        <Route path="/rep" element={<Reportes/>} />
        </Routes>
     </HashRouter>
  )
}

export default App