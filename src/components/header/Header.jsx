import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header(props) {
  return (
    <div className='header'>
            <Logo/>
            {<Nav reset={props.reset} authenticated={props.authenticated}/>}
    </div>
  )
}

export default Header