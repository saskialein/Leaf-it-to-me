import React from 'react'
import { connect } from 'react-redux'

import PlantList from './PlantList.jsx'

// this component should render just the specific 

const SavedPlants = () => {
  return (
    <div>
   
  
    <PlantList/>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    currentPlant: globalState.currentPlant,
    loggedUsersPlants: [1, 5, 8],
    user: globalState.user
  }
}
export default connect(mapStateToProps)(SavedPlants)

