import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { checkAuth } from "../actions/auth.js"
import { fetchPlants } from "../actions/index.js"

import Home from './Home.jsx'
import Nav from './Nav.jsx'
import IndividualPlant from './IndividualPlant.jsx'
import AddPlantForm from './AddPlantForm.jsx'
import SignIn from './SignIn'
import Register from './Register'
import UserPlantList from './UserPlantList'


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(checkAuth())
    this.props.dispatch(fetchPlants())
  }


  render() {
    return (
      <div className="app">
        <Nav />

        <Route exact path="/" component={Home} />

        <Switch>
          <Route exact path="/plants/new" component={AddPlantForm} />
          <Route exact path="/plants/saved" component={UserPlantList} />
          <Route exact path='/plants/:name' component = {IndividualPlant}/>
        </Switch>

        <Route exact path='/login' component={SignIn}/>
        <Route exact path="/register" component={Register} />

      </div>
    );
  }
}

function mapStateToProps (globalState) {
  return {
    users: globalState.users,
}
}

export default connect(mapStateToProps)(App)
