
import React from "react"
import { connect } from 'react-redux'
import { removePlant } from "../actions/usersPlants"
import Plant from "./Plant"
import Search from "./Search"
import { Link } from 'react-router-dom'

class UserPlantList extends React.Component {

  
  render() {

    const nameMatchesSearch = (name) => name.toLowerCase().includes(this.props.searchTerm.toLowerCase())

    const userOwnsOne = (plant) => this.props.usersPlants.some((oneUserPlant) => oneUserPlant.plant_id == plant.id)

    let usersFilteredArray = this.props.plants.filter((plant) => nameMatchesSearch(plant.common_name) && userOwnsOne(plant))

    return (
      <>
        <h1>My happy plants</h1>
        <Search />
        <div className="profile-wrapper">
          {usersFilteredArray.map((userPlant) => {
          return (
          
          
          // <UserPlant key={userPlant.id} plant={userPlant}/>
            <div key={userPlant.id} className='each-profile'>
              <div className='profile-picture'>
                <img src={userPlant.img} />
              </div>
              <div className='profile-name-plate'>
                <h4 className='name'>{userPlant.common_name}</h4>
                <p className='species'>{userPlant.species_name}</p>
              </div>
              <div className='button-plate'>
                <Link to={`/plants/${userPlant.common_name}`}><button>More info</button></Link>
                <button onClick={() => this.props.dispatch(removePlant(userPlant.id))} >Remove</button>
              </div>
          </div>
          )
        })}
      </div>
      </> 
    )
  }
}
function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    usersPlants: globalState.usersPlants,
    searchTerm: globalState.search
  };
}
export default connect(mapStateToProps)(UserPlantList);
