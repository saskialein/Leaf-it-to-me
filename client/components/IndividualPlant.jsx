import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addPlantToReduxandDb } from '../actions/index'
import { isAuthenticated } from 'authenticare/client'

const IndividualPlant = (props) => {
  const name = props.match.params.name
  const plant = props.plants.find((plant) => plant.common_name == name)

  const handleClick = () => {
    const plantObject = {
        plant_id: plant.id,
        name: ''
      }
      if (isAuthenticated()) {
        props.dispatch(addPlantToReduxandDb(plantObject))
        props.history.push("/plants/saved") 
      } else {
          props.history.push("/register")
      }
    }
  
  return (
    // if plant exists render the plant, otherwise render null (see line 45)
    plant ? <div>
            <div key={plant.id}>
              <div className="individ-plant-main">
                <h1 className='individual-plant-header'> Plant Care Details</h1>
                <hr/>
                <div>
                <h2 className="commonName">{plant.common_name}</h2>
                <h3 className="speciesName">{plant.species_name}</h3>
                </div>

                <div className="careDetailWrapper">
                  <img src= {plant.img}/>
                  <div className="careDetail"> 
                    <ul className="individ-plant-details">         
                      <li><i className="fas fa-tint style"/> {plant.water}</li>
                      <li><i className="fas fa-sun style"/> {plant.light}</li>
                      <li><i className="fas fa-temperature-low style"/> {plant.temp}</li>
                      <li><i className="fas fa-tint"/><i className="fas fa-percent style-special"/> {plant.humidity}</li>
                      <li><i className="fas fa-poop style"/> {plant.soil}</li>
                      <li><i className="fas fa-user style"/> {plant.lvl}</li>
                      <li><i className="far fa-comment-alt style"/> {plant.notes}</li>
                    </ul>   
                    <div className="navy">         
                      <Link onClick={handleClick} className="navy-link">Add Plant to profile</Link>
                    </div> 
                  </div> 
                </div>
                </div>
            </div>
            </div>
    : null
  );
};

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    currentPlant: globalState.currentPlant,
  }
}
export default connect(mapStateToProps)(IndividualPlant)

