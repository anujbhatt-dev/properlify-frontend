import React from 'react'
import { motion } from 'framer-motion'
import logoWhitePng from "../../assets/images/logoWhitePng.png"
import { useNavigate } from 'react-router'

function Logo() {
  const navigate = useNavigate()
  return (
    <motion.div className='logo'  onClick={()=>navigate("/")}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 100, delay: 0.02 }}>
        <img className='logo__img' src={logoWhitePng} alt="" />
    </motion.div>
  )
}

export default Logo