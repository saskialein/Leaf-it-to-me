import React from "react";
import { connect } from 'react-redux'

import Plant from "./Plant";


class UserPlantList extends React.Component {

  
  render() {

    // filter through userPlants in global state and pull out the plant_id of each object in the array and push into new array called userPlantIds
    
    // , and then map over the plants in global state and render any plant that matches that id 

let usersFilteredArray = this.props.plants.filter((matchingPlant) => {
  return this.props.usersPlants.some((oneUserPlant) => {
    return oneUserPlant.plant_id == matchingPlant.id
  })
})

  return(
    <>
      <h1>My happy plants</h1>

      <div className="profile-wrapper">
        {usersFilteredArray.map((userPlant) => {
          return (
          <Plant key={userPlant.id} plant={userPlant}/>
          )
        })}
      </div>
    </> 
    )
  }
}


function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    currentPlant: globalState.currentPlant,
    usersPlants: globalState.usersPlants,
    searchTerm: globalState.search
  };
}
export default connect(mapStateToProps)(UserPlantList);
