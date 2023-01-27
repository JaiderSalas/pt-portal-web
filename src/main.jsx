import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/Principal";
import Reportes from "./pages/Reportes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
