import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from './pages/Signup/Register.jsx'
import Home from './pages/Home/Home.jsx'

const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/auth/register" element={<Register/>}/>
    
    </Routes>
    </BrowserRouter>
    )
}

export default App;