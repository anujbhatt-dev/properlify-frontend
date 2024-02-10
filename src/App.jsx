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
    console.log(user);
  },[user])

  return (
    <div className='app'>
        <Header/>
        <Routes>
           <Route path="" element={<Home/>}/>
           <Route path="/login" element={<Login user={user} getAuthenticated={getAuthenticated}/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path='/buyerDashboard' element={<BuyerDashboard/>}/>
           <Route path='/property' element={<Property/>}/>
<<<<<<< HEAD
           <Route path='/sellerDashboard' element={<SellerDashboard/>}/>
=======
           <Route path='/buyerdashboard' element={<BuyerDashboard />} />
>>>>>>> 33c07db9dcdbb802bac0dcd0f8f30469d696839e
        </Routes>
    </div>
  )
}

export default App