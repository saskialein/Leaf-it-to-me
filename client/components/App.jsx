import React from 'react'
import { Route,  } from 'react-router-dom'
import { connect } from 'react-redux'

// Switch

import Header from './Header.jsx'
import Home from './Home.jsx'
import IndividualPlant from './IndividualPlant.jsx'
import SavedPlants from './SavedPlants.jsx'
import SignIn from './SignIn'
import Register from './Register'


// import NewComponent from './NewComponent.jsx'



class App extends React.Component {
    render () {
      return (
        <>
          <Header/>
          <Route exact path='/' component={Home}/>

          <Route exact path='/plants/example' component = {IndividualPlant}/>
          <Route exact path='/plants/saved' component={SavedPlants}/>
          {/* <Route exact path='/plants/new' component={AddPlantForm}/> */}

          <Route exact path='/login' component={SignIn}/>
          <Route exact path='/register' component={Register}/>

        </>
      )
    }
  }

export default App
