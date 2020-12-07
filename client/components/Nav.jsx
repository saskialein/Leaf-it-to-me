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
<<<<<<< HEAD
          <NavLink to="/plants/saved" activeClassName="active" className="nav-link" id="nav-btn-savedPlants">
=======
          <NavLink
            to="/plants/saved"
            activeClassName="active"
            className="nav-link"
            id="nav-btn-savedPlants"
          >
>>>>>>> b9843b4238f65d94f7c4b1ff6b5cb72629719d5f
            Saved Plants
          </NavLink>

<<<<<<< HEAD
          <NavLink to="/plants/new" activeClassName="active" className="nav-link" id="nav-btn-addNewPlant">
            New Plant Form
=======
        <IfAuthenticated>
          <NavLink
            to="/#search"
            activeClassName="active"
            // className="nav-link"
            // id="nav-btn-addNewPlant"
          >
            {/* Add New Plant */}
            <ModalPopUp/>
>>>>>>> b9843b4238f65d94f7c4b1ff6b5cb72629719d5f
          </NavLink>

<<<<<<< HEAD
          <NavLink to="/home" activeClassName="active" className="nav-link" onClick={() => logOutUser(props.dispatch)}>
=======
        <IfAuthenticated>
          <NavLink
            to="/"
            activeClassName="active"
            className="nav-link"
            onClick={() => logOutUser(props.dispatch)}
          >
>>>>>>> b9843b4238f65d94f7c4b1ff6b5cb72629719d5f
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
<<<<<<< HEAD
=======
function mapStateToProps(globalState) {
  return {}
}
>>>>>>> b9843b4238f65d94f7c4b1ff6b5cb72629719d5f

export default connect()(Nav)
