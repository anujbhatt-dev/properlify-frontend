import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header(props) {
  return (
    <div className='header'>
            <Logo/>
            {!props.authenticated && <Nav/>}
    </div>
  )
}

export default Header