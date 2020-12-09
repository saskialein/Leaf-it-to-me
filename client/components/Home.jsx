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
        <div className="logo-wrapper">
          <img
            className="logo-leaf-it-to-me"
            src="./images/LeafItToMe_Logo.svg"/>
        </div>

        <div className="main-img">
        <img src="./images/potted-plant-transparent-background-5.png"
          alt=""
          id ="registerWelcomePage"/>
          </div>


         <IfNotAuthenticated>

          <p className='myh2'>
            Helping house plant owners make their plants feel like bliss. Leaf
            it to us.
          </p>
          </IfNotAuthenticated>
         
          <IfAuthenticated>
        {props.auth.user && <h3>Kia ora {props.auth.user.name}, to add new plants to your profile browse through our jungle database below or hit the searchbar!</h3>}

          </IfAuthenticated>
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

