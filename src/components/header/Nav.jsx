import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
            <NavLink exact  className={({ isActive, isPending }) =>
            isPending ? "nav__item" : isActive ? "nav__item nav__active" : ""
            }  to = '/login'>
                login
            </NavLink>
            <NavLink exact   className={({ isActive, isPending }) =>
            isPending ? "nav__item" : isActive ? "nav__item nav__active" : ""
            } to = '/register'>
                register
            </NavLink>
    </div>
  )
}

export default Nav