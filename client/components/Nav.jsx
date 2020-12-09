import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOut } from '../actions/auth'
import { clearUsersPlants } from '../actions/usersPlants'
import ModalPopUp from './ModalPopUp'

// modal

const logOutUser = (dispatch) => {
  logOff()
  dispatch(logOut())
  dispatch(clearUsersPlants())
}

const Nav = (props) => {
  return (
    <>
      <div className="nav">
        {/* <h1 className="">Leaf it to me</h1> */}
        <NavLink to="/" exact activeClassName="active" className="nav-link" id="home">
          Home
        </NavLink>

        <IfAuthenticated>
          <NavLink to="/plants/saved" exact activeClassName="active" className="nav-link" id="saved-plants">
            Saved Plants
          </NavLink>

          <ModalPopUp />
        </IfAuthenticated>

        <IfNotAuthenticated>
          <NavLink to="/login" exact activeClassName="active" className="nav-link" id="sign-in">
            Sign In
          </NavLink>
        </IfNotAuthenticated>

          <IfAuthenticated>
          <a href='/'className="nav-link" id="sign-out" onClick={() => logOutUser(props.dispatch)}>
            Sign Out
          </a>
        </IfAuthenticated>

        <IfNotAuthenticated>
        
          <NavLink to="/sign-up" exact activeClassName="active" className="nav-link" id="sign-up">
            Sign Up
          </NavLink>
        </IfNotAuthenticated>
      </div>
    </>
  )
}


export default connect()(Nav)
