
import React from "react"
import { connect } from 'react-redux'

import UserPlant from "./UserPlant"
import Search from "./Search"
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

class UserPlantList extends React.Component {

  
  render() {

    const nameMatchesSearch = (name) => name.toLowerCase().includes(this.props.searchTerm.toLowerCase())

    const userOwnsOne = (plant) => this.props.usersPlants.some((oneUserPlant) => oneUserPlant.plant_id == plant.id)

    let usersFilteredArray = this.props.plants.filter((plant) => nameMatchesSearch(plant.common_name) && userOwnsOne(plant))

    return (
      <div className= 'userPlantPage' >
      <IfAuthenticated>
        {this.props.auth.user && <h3>Hey {this.props.auth.user.name}, here's your saved plants</h3>}
      </IfAuthenticated>
        <Search />
      
      
      {/* <h1>My happy plants</h1>
        <div className="userPlantSearch">
          <Search />
        </div> */}
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
    searchTerm: globalState.search,
    auth: globalState.auth
  };
}
export default connect(mapStateToProps)(UserPlantList);
