import React from 'react'
// import { NavLink } from 'react-router-dom'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOut } from '../actions/auth'
import { clearUsersPlants } from '../actions/usersPlants'
import ModalPopUp from './ModalPopUp'

const logOutUser = (dispatch) => {
  logOff()
  dispatch(logOut())
  dispatch(clearUsersPlants())
}

const Nav = (props) => {
  return (
    <>
      <div className="nav">
        <h1 className="">Leaf it to me</h1>
        <NavLink to="/" exact activeClassName="active" className="nav-link">
          Home
        </NavLink>

        <IfAuthenticated>
          <NavLink to="/plants/saved" activeClassName="active" className="nav-link" id="nav-btn-savedPlants">
            Saved Plants
          </NavLink>

          <NavLink to="/plants/new" activeClassName="active" className="nav-link" id="nav-btn-addNewPlant">
            New Plant Form
          </NavLink>

          <NavLink to="/home" activeClassName="active" className="nav-link" onClick={() => logOutUser(props.dispatch)}>
            Sign Out
          </NavLink>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            Sign In
          </NavLink>
        
          <NavLink to="/register" activeClassName="active" className="nav-link">
            Sign Up
          </NavLink>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default connect()(Nav)
