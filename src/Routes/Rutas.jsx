import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import Reportes from '../pages/Reportes';

function Rutas() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/principal" element={<Principal/>}/>
                    <Route path="/reportes" element={<Reportes/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default Rutas
