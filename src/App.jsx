import React, {useEffect, useNavigate, useState} from 'react'
import "./App.scss"
import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Login from './components/Login'
import Register from './components/Register'
import BuyerDashboard from './components/buyer/BuyerDashboard'
import Property from './components/buyer/Property'
import SellerDashboard from './components/seller/SellerDashboard'


function App() {
  // const navigate = useNavigate()

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
        <Header/>
        <Routes>
           <Route path="" element={<Home/>}/>
           <Route path="/login" element={<Login user={user} getAuthenticated={getAuthenticated}/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path='/buyerDashboard' element={<BuyerDashboard user={user} />}/>
           <Route path='/sellerdashboard' element={<SellerDashboard user={user} />} />
           <Route path='/property' element={<Property user={user} />}/>
        </Routes>
    </div>
  )
}

export default App