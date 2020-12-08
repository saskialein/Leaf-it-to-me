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
  props.history.push('/plants/saved')
} 
  
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
          <button onClick={handleClick}>Add to my profile</button>
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
  }
}
export default connect(mapStateToProps)(Plant)
