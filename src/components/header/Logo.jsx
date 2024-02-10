import React from 'react'
import { motion } from 'framer-motion'
import logoWhite from "../../assets/images/logoWhite.jpg"
import logoBlack from "../../assets/images/logoBlack.jpg"
import logoBlue from "../../assets/images/logoBlue.jpg"
import logoWhitePng from "../../assets/images/logoWhitePng.png"
import logoBlackPng from "../../assets/images/logoBlackPng.png"
import logoBluePng from "../../assets/images/logoBluePng.png"

function Logo() {
  return (
    <motion.div className='logo'
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 100, delay: 0.02 }}>
        <img className='logo__img' src={logoWhitePng} alt="" />
    </motion.div>
  )
}

export default Logo