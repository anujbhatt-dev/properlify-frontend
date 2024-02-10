import React from 'react'
import "./App.scss"
import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className='app'>
        <Header/>
        <Routes>
           <Route path="" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default App