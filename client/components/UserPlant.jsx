import React from "react"
import { connect } from 'react-redux'
import { removePlant } from "../actions/usersPlants"
import { Link } from 'react-router-dom'

const UserPlant = (props) => {
  
  const plant = props.plant
  const rowClass = props.isOdd ? 'odd' : 'even'

  return (
    <>
      <div key={plant.id}>
        <div className={`user-plant-main ${rowClass}`}>
          <p className="user-common">{plant.common_name}</p>
          <p className="user-offical-name">{plant.species_name}</p>
          <div className="user-plant-details"> 
            <img className='user-plant-image' src= {plant.img}/>
            <ul className="plant-deets">
              <li>{plant.water}</li>
              <li>{plant.light}</li>
              <li>{plant.temp}</li>
              <li>{plant.humidity}</li>
              <li>{plant.soil}</li>
              <li>{plant.lvl}</li>
              <li>{plant.more}</li>
            </ul> 
            <div className="Nav">
            <Link to={`/plants/${plant.common_name}`}className="nav-link">More info</Link>             
            <button onClick={() => props.dispatch(removePlant(plant.id))} >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    currentPlant: globalState.currentPlant,
  }
}
export default connect(mapStateToProps)(UserPlant)