
import React from "react"
import { connect } from 'react-redux'

import UserPlant from "./UserPlant"
import Search from "./Search"


class UserPlantList extends React.Component {

  
  render() {

    const nameMatchesSearch = (name) => name.toLowerCase().includes(this.props.searchTerm.toLowerCase())

    const userOwnsOne = (plant) => this.props.usersPlants.some((oneUserPlant) => oneUserPlant.plant_id == plant.id)

    let usersFilteredArray = this.props.plants.filter((plant) => nameMatchesSearch(plant.common_name) && userOwnsOne(plant))

    return (
      <div className= 'userPlantPage' >
      
      <h1>My happy plants</h1>
        <Search />
        <div className="plant-wrapper">
          {usersFilteredArray.map((userPlant, index) => <UserPlant key={userPlant.id} plant={userPlant} isOdd={index % 2 == 1} />)}
        </div>
      </div> 
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
