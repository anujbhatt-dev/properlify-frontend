import React from 'react'
import logoWhite from "../../assets/images/logoWhite.jpg"
import logoBlack from "../../assets/images/logoBlack.jpg"
import logoBlue from "../../assets/images/logoBlue.jpg"
import logoWhitePng from "../../assets/images/logoWhitePng.png"
import logoBlackPng from "../../assets/images/logoBlackPng.png"
import logoBluePng from "../../assets/images/logoBluePng.png"

function Logo() {
  return (
    <div className='logo'>
        <img className='logo__img' src={logoWhitePng} alt="" />
    </div>
  )
}

export default Logo