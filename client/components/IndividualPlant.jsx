import React from "react"
import { connect } from 'react-redux'
import { addPlantToReduxandDb } from '../actions/index'
import { addPlantToUsersPlantsDB } from '../apis/plants'

const IndividualPlant = (props) => {
  const name = props.match.params.name
  const plant = props.plants.find((plant) => plant.common_name == name)

  const handleClick = () => {

    const plantObject = {
        plant_id: plant.id,
        name: 'emily'
      }
    props.dispatch(addPlantToReduxandDb(plantObject))
    props.history.push('/plants/saved')
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
                
                <ul className="">         
                  <li>{plant.water}</li>
                  <li>{plant.light}</li>
                  <li>{plant.temp}</li>
                  <li>{plant.humidity}</li>
                  <li>{plant.soil}</li>
                  <li>{plant.lvl}</li>
                  <li>{plant.more}</li>
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

