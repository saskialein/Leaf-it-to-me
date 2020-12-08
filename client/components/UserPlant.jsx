import React from "react"
import { connect } from 'react-redux'
import { removePlant } from "../actions/usersPlants"
import { Link } from 'react-router-dom'

const UserPlant = (props) => {
  
  const plant = props.plant
  const rowClass = props.isOdd ? 'odd' : 'even'

  return (
    <div>
      <div key={plant.id}>
        <div className={`individ-plant-main ${rowClass}`}>
          <h2 className="commonName">{plant.common_name}</h2>
          <h3 className="commonName">{plant.species_name}</h3>
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
            <div className="nav">
            <Link to={`/plants/${plant.common_name}`}className="nav-link">More info</Link>             
            <button onClick={() => props.dispatch(removePlant(plant.id))} >Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    currentPlant: globalState.currentPlant,
  }
}
export default connect(mapStateToProps)(UserPlant)