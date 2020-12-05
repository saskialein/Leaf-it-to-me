import React from "react"
import { connect } from 'react-redux'
import { addPlantToReduxandDb } from '../actions/index'

const IndividualPlant = (props) => {
  const name = props.match.params.name
  const userPlant = {
    plant_id: 4,
    user_id: 2
  }

  return (
    <div>

      {props.plants
        .filter((plant) => plant.common_name == name)
        .map((plant) => {
          return (
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
                <button onClick={() => {props.dispatch(addPlantToReduxandDb(userPlant))}}>Add Plant to profile</button>
              </div>
            </div>
            </div>
          );
        })}
    </div>
  );
};

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
  }
}
export default connect(mapStateToProps)(IndividualPlant)

