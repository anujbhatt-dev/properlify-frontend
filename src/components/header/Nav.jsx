import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav(props) {
  return (
    <div className='nav'>
            {!props.authenticated?
              [
                <NavLink exact  className={({ isActive, isPending }) =>
            isPending ? "nav__item" : isActive ? "nav__item nav__active" : ""
            }  to = '/login'>
                login
            </NavLink>,
            <NavLink exact   className={({ isActive, isPending }) =>
            isPending ? "nav__item" : isActive ? "nav__item nav__active" : ""
            } to = '/register'>
                register
            </NavLink>
              ]:<button className='button' onClick={()=>props.reset()}>
                  logout
              </button>

            }
            
    </div>
  )
}

export default Nav