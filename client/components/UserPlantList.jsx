import React from "react"
import { connect } from 'react-redux'

import Plant from "./Plant"
import Search from "./Search"

class UserPlantList extends React.Component {

  
  render() {

    // filter through userPlants in global state and pull out the plant_id of each object in the array and push into new array called userPlantIds
    
    // , and then map over the plants in global state and render any plant that matches that id 

    const nameMatchesSearch = (name) => name.toLowerCase().includes(this.props.searchTerm.toLowerCase())

    const userOwnsOne = (plant) => this.props.usersPlants.some((oneUserPlant) => oneUserPlant.plant_id == plant.id)

    let usersFilteredArray = this.props.plants.filter((plant) => nameMatchesSearch(plant.common_name) && userOwnsOne(plant))

    return (
      <>
        <h1>My happy plants</h1>
        <Search />
        <div className="profile-wrapper">
          {usersFilteredArray.map((userPlant) => <Plant key={userPlant.id} plant={userPlant}/>)}
        </div>
      </> 
    )
  }
}


function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    usersPlants: globalState.usersPlants,
    searchTerm: globalState.search
  };
}

export default connect(mapStateToProps)(UserPlantList);
