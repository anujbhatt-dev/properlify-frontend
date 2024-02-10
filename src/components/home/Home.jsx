import React from 'react'
import Header from '../header/Header'
import circle from "../../assets/images/concentric-circle-1.png"

function Home() {
  return (
    <div className='home'>
        <div className='hero'>
            <img src={circle} alt="" />
            <div className='hero-content'>
                <p>Real-Time</p>
                <p>Buy</p>
                <p>sell</p>
            </div>
        </div>
    </div>
  )
}

export default Home