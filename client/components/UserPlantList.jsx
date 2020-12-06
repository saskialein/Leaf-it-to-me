import React from "react";
import Plant from "./Plant"
import { connect } from 'react-redux'
import Search from './Search'

class UserPlantList extends React.Component {

  render() {

    const userPlantIds = this.props.usersPlants.map((userPlant) => {
      const userPlants = []
      const userPlantsArr = userPlants.push(userPlant.plant_id)
      console.log(userPlantsArr)
      return userPlants
    })

    // const filter = this.props.plants.filter((plant) => {
    //   return plant.includes(userPlantIds)
    // })

    // console.log(filter)



  // filter through userPlants in global state and pull out the plant_id of each object in the array and push into new array called userPlantIds
  
  // , and then map over the plants in global state and render any plant that matches that id 

  return(
    <div>
      <Search />
      <h1>PlantList</h1>


      {/* <div className="profile-wrapper">
        {this.props.usersPlants.map((plant) => {

          return (
            <Plant key={plant.id} plant={plant}/>
          )
        })}
      </div> */}
    </div>
    )
  }
}


function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    currentPlant: globalState.currentPlant,
    usersPlants: globalState.usersPlants
  };
}
export default connect(mapStateToProps)(UserPlantList);
