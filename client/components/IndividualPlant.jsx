import React from "react"
import { connect } from 'react-redux'
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
                <h2 className="commonName">{plant.common_name}</h2>
                <h3 className="commonName">{plant.species_name}</h3>

                <div className="careDetailWrapper"></div>
              
              <div className="careDetail"> 
              <img src= {plant.img}/>
                
                <ul className="individ-plant-details">         
                  <li><i className="fas fa-tint"/> {plant.water}</li>
                  <li><i className="fas fa-sun"/> {plant.light}</li>
                  <li><i className="fas fa-temperature-low"/> {plant.temp}</li>
                  <li><i className="fas fa-tint"/><i className="fas fa-percent"/> {plant.humidity}</li>
                  <li><i className="fas fa-poop"/> {plant.soil}</li>
                  <li><i className="fas fa-user"/> {plant.lvl}</li>
                  <li><i className="far fa-comment-alt"/> {plant.notes}</li>
                </ul>              
                <button onClick={handleClick}>Add Plant to profile</button>
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

