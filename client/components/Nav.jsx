import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <>
    <div className= 'nav-horizontal-div'>
      <button><NavLink to='/' exact activeClassName="active" className="nav-link"> Home</NavLink></button>
   
     
      <button><NavLink to='/plants/example' activeClassName="active" className="nav-link">Individual Plant</NavLink></button>

      <button><NavLink to='/plants/saved' activeClassName="active" className="nav-link">Saved Plants</NavLink></button>

      <button><NavLink to='/login' activeClassName="active" className="nav-link"> Login</NavLink></button>
      <button><NavLink to='/register' activeClassName="active" className="nav-link"> Register</NavLink></button>
     
      </div>
    </>
  )
}

export default Nav
