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
        <NavLink to="/" exact activeClassName="active" className="L-Logo">
          <img src="./images/LeafItToMe_L_Logo.svg" />
        </NavLink>

        <IfAuthenticated>
          <NavLink
            to="/plants/saved"
            exact
            activeClassName="active"
            className="nav-link"
            id="nav-btn-savedPlants"
          >
            Saved Plants
          </NavLink>
          <a
            href="#"
            className="nav-link"
            id="btn-sign-Out"
            onClick={() => logOutUser(props.dispatch)}
          >
            Sign Out
          </a>
          <ModalPopUp />
        </IfAuthenticated>

        <IfNotAuthenticated>
          <NavLink
            to="/login"
            exact
            activeClassName="active"
            className="nav-link"
            id="btn-sign-in"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            exact
            activeClassName="active"
            className="nav-link"
            id="btn-sign-up"
          >
            Sign Up
          </NavLink>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default connect()(Nav)
