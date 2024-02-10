import React from 'react'
import Header from '../header/Header'
import circle from "../../assets/images/concentric-circle-1.png"
import { useNavigate } from 'react-router'


function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>
        <div className='hero'>
            <img src={circle} alt="" />
            <div className='hero-content'>
                <p>Real-Time</p>
                <p>Property Solutions</p>
                <p>for Everyone</p>
            </div>
            <button onClick={()=>navigate("/login")} className='button hero-button'>login</button>
            <button onClick={()=>navigate("/register")}  className='button hero-button'>register</button>
        </div>
    </div>
  )
}

export default Home