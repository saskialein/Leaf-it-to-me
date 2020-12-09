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
  props.history.push('/plants/saved')
} 
  
  return (
    <div>
      <div className='each-smallPlant'>
      <div className='smallPlant-picture'>
          <img className='smallPlant-picture' src= {plant.img} alt={`image of a ${plant.common_name}`}/>
        <div className='smallPlant-name-plate'>
          <p className='name'>{plant.common_name}</p>
          <p className='species'>{plant.species_name}</p>

        </div>
        <div className='button-plate'>
          <Link to={`/plants/${plant.common_name}`} className="navy-link" id="button-more-info">More info</Link>

          <IfAuthenticated>
            <label htmlFor="button to add plant to profile"></label>
            <Link to={'/plants/saved'} onClick={handleClick} className="navy-link"><i className="fab fa-pagelines style-leaf" id="button to add plant to profile"></i>Add to my profile</Link>
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
