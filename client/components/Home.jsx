import React from 'react'
import { Route } from 'react-router-dom'
import PlantList from './PlantList.jsx'
import { connect } from 'react-redux'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Home = (props) => {
  // const loggedInUser = props.auth.user
  // console.log( loggedInUser)


  return (
    <>
      <div className="home">
        <img
          className="main-img"
          src="./images/potted-plant-transparent-background-5.png"
          alt=""
          id ="registerWelcomePage"
        />
        <div className="homeBanner">
          <h2>LEAF IT TO ME</h2>
          <IfNotAuthenticated>
          <h3>PLANT CARE MADE EASY</h3>
          <p>
            Helping house plant owners make their plants feel like bliss. Leaf
            it to us.
          </p>
          </IfNotAuthenticated>
         
          <IfAuthenticated>
        {props.auth.user && <h3>Kia ora {props.auth.user.name}, to add new plants to your profile browse through our jungle database below or hit the searchbar!</h3>}

          </IfAuthenticated>

          <IfNotAuthenticated>
            <NavLink
              to="/register"
              activeClassName="active"
              className="nav-link"
              id="btn-sign-up"
            >
              Sign Up
            </NavLink>
          </IfNotAuthenticated>
        </div>
      </div>
      <div>
        <Route path="/" component={PlantList} />
      </div>
    </>
  )
}


function mapStateToProps(globalState) {
  return {
    auth: globalState.auth,
  }
}
export default connect(mapStateToProps)(Home)

