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
      name: ''
    }

  props.dispatch(addPlantToReduxandDb(plantObject))
 
} 
// Emily's button disappearing functionality:
// const userPlants = props.usersPlants
// const found = userPlants.find(userPlant =>  userPlant.plant_id == plant.id)
  
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
          <Link to={`/plants/${plant.common_name}`} className="butties" id="button-more-info">More info</Link>

          <IfAuthenticated>

          <Link to={'/plants/saved'} onClick={handleClick} className="butties"><i className="fab fa-pagelines style-leaf"></i>Add to my profile</Link>

          {/* {!found && <button onClick={handleClick}>Add to my profile</button>} */}

          {/* {!found ? 'button' : 'tick'} */}
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
