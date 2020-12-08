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
          <img className='user-plant-image' src={plant.img}/>
          <div className="user-plant-details"> 
            
            <p className="user-common">{plant.common_name}</p>
            <p className="user-offical-name">{plant.species_name}</p>
            <ul className='plant-type'>
              <li><p>Water</p><hr/></li>
              <li><p>Light</p><hr/></li>
              <li><p>Temp</p><hr/></li>
              <li><p>Humidity</p><hr/></li>
              <li><p>Soil</p><hr/></li>
              <li><p>Level</p><hr/></li>
            </ul>
            <ul className="plant-deets">
              <li><p>{plant.water}</p><hr/></li>
              <li><p>{plant.light}</p><hr/></li>
              <li><p>{plant.temp}</p><hr/></li>
              <li><p>{plant.humidity}</p><hr/></li>
              <li><p>{plant.soil}</p><hr/></li>
              <li><p>{plant.lvl}</p><hr/></li>
            </ul> 
            <div className="nav">
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