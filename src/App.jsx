import React, {useEffect, useState} from 'react'
import "./App.scss"
import { Route, Routes, useNavigate } from 'react-router'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Login from './components/Login'
import Register from './components/Register'
import BuyerDashboard from './components/buyer/BuyerDashboard'
import Property from './components/buyer/Property'
import SellerDashboard from './components/seller/SellerDashboard'
import Team from './components/Team'
import Problem from './components/Problem'
import Footer from './components/Footer'


function App() {
  const navigate = useNavigate()

  const [authenticated,setAuthentication] = useState(false)
  const [user,setUser]= useState({})

  const getAuthenticated =(data)=>{
    setUser(data)
    setAuthentication(true)
  }

  const reset = ()=>{
    setUser(null)
    setAuthentication(false)
    navigate("/")
  }

  useEffect(()=>{
  },[user])

  return (
    <div className='app'>
        <Header reset={reset} authenticated={authenticated}/>
        <Routes>
           <Route path="" element={<Home/>}/>
           <Route path="/login" element={<Login user={user} getAuthenticated={getAuthenticated}/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path='/buyerDashboard' element={<BuyerDashboard/>}/>
           <Route path='/sellerdashboard' element={<SellerDashboard user={user} getAuthenticated={getAuthenticated}/>} />
           <Route path='/property' element={<Property/>}/>
           <Route path='/team' element={<Team/>}/>
           <Route path='/problem' element={<Problem/>} />
        </Routes>
        
        <Footer/>
    </div>
  )
}

export default App