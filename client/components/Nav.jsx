import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { connect } from 'react-redux'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { logOut } from '../actions/auth'
import { clearUsersPlants } from '../actions/usersPlants'

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
          {' '}
          Home
        </NavLink>

        <IfAuthenticated>
        <NavLink
            to="/plants/saved"
            activeClassName="active"
            className="nav-link"
            id="nav-btn-savedPlants"
          >
            Saved Plants
          </NavLink>
        </IfAuthenticated>

        <IfAuthenticated>
          <NavLink
            to="/plants/new"
            activeClassName="active"
            className="nav-link"
            id="nav-btn-addNewPlant"
          >
            New Plant Form
          </NavLink>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <NavLink to="/login" activeClassName="active" className="nav-link">
            Sign In
          </NavLink>
        </IfNotAuthenticated>

        <IfAuthenticated>
          <NavLink
            to="/"
            activeClassName="active"
            className="nav-link"
            onClick={() => logOutUser(props.dispatch)}
          >
            Sign Out
          </NavLink>
        </IfAuthenticated>

        <IfNotAuthenticated>
          <NavLink to="/register" activeClassName="active" className="nav-link">
            Sign Up
          </NavLink>
        </IfNotAuthenticated>
      </div>
    </>
  )
}
function mapStateToProps (globalState) {
  return {
    
  }
}

export default connect()(Nav)
