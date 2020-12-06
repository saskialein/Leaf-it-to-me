import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPlantToUsersPlantsDB } from '../apis/plants'

import { addPlantToReduxandDb, currentPlant } from '../actions/index'

const Plant = (props) => {

  const plant = props.plant 
  const handleClick = () => {
    console.log('hi i am handleclick')
    // props.dispatch(addPlantToReduxandDb(plant.id)
  } 
  return (
    <div>
      <div className='each-profile'>
      <div className='profile-picture'>
          <img src= {plant.img}/>
        <div className='profile-name-plate'>
          <p className='profile-name'>{plant.common_name}</p>
          <p className='species'>{plant.species_name}</p>
          <Link to={`/plants/${plant.common_name}`}><button>Click me</button></Link>
          <h4 className='name'>{plant.common_name}</h4>
          <button onClick={handleClick}>Add Me</button>
        </div>
      </div>
      
        </div>
        </div>
  )
}
import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { removePlant } from '../actions/usersPlants'
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
console.log(usersFilteredArray);

  return(
    <>
      <h1>My happy plants</h1>

      <div className="profile-wrapper">
        {usersFilteredArray.map((userPlant) => {
          return (
          
          
          <Plant key={userPlant.id} plant={userPlant}/>
          //   <div key={userPlant.id} className='each-profile'>
          //     <div className='profile-picture'>
          //       <img src={userPlant.img} />
          //     </div>
          //     <div className='profile-name-plate'>
          //       <h4 className='name'>{userPlant.common_name}</h4>
          //       <p className='species'>{userPlant.species_name}</p>
          //     </div>
          //     <div className='button-plate'>
          //       <Link to={`/plants/${userPlant.common_name}`}><button>More info</button></Link>
          //       <button onClick={() => this.props.dispatch(removePlant(userPlant.id))} id="image-button">Remove</button>
          //     </div>
          // </div>
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
export default connect(mapStateToProps)(Plant);
