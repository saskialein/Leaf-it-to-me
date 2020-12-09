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

          <div className='plant-div'>
            <img className='user-plant-image' src={plant.img}/>
          </div>

            <div className='plant-deets-block'>
              <div className='deets-second-block'>
                <p className="user-offical-name">{plant.common_name}</p>
                <ul className="plant-deets">         
                  <li><i className="fas fa-tint style"/> {plant.water}</li>
                  <li><i className="fas fa-sun style"/> {plant.light}</li>
                  <li><i className="fas fa-temperature-low style"/> {plant.temp}</li>
                  <li><i className="fas fa-tint"/><i className="fas fa-percent style-special"/> {plant.humidity}</li>
                  <li><i className="fas fa-poop style"/> {plant.soil}</li>
                  <li><i className="fas fa-user style"/> {plant.lvl}</li>
                </ul>
              </div>
                <div className='delete-div'>
                  <a className='user-delete' onClick={() => props.dispatch(removePlant(plant.id))} ><span className="tooltip-text-trash">Remove</span><i className="fas fa-trash"></i></a>
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