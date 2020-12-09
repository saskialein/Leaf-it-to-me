import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPlantToReduxandDb, currentPlant } from '../actions/index'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

const Plant = (props) => {

  const plant = props.plant 
  const handleClick = () => {
    const plantObject = {
      plant_id: plant.id,
      name: 'emily'
    }

  props.dispatch(addPlantToReduxandDb(plantObject))
  // props.history.push('/plants/saved')
} 

//  console.log(plantObject)
const userPlants = props.usersPlants
// console.log(plant)
const found = userPlants.find(userPlant =>  userPlant.plant_id == plant.id)
console.log(plant.common_name, found)
  // console.log('this is the plants', props.plants)
  // console.log('this is the userPlants', userPlants)
  // // const usersPlants = props.userPlants 
  // console.log(usersPlants)

  
  return (
    <div>
      <div className='each-smallPlant'>
      <div className='smallPlant-picture'>
          <img className='smallPlant-picture' src= {plant.img}/>
        <div className='smallPlant-name-plate'>
          <p className='name'>{plant.common_name}</p>
          <p className='species'>{plant.species_name}</p>

        </div>
        <div className='button-plate'>
          <Link to={`/plants/${plant.common_name}`}>More info</Link>

          <IfAuthenticated>

          {!found && <button onClick={handleClick}>Add to my profile</button>}

          {!found ? 'button' : 'tick'}
          </IfAuthenticated>
        </div>
        </div>
      
        </div>
        </div>
  )
}

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    usersPlants: globalState.usersPlants
  }
}
export default connect(mapStateToProps)(Plant)
