import React from "react";

import { connect } from 'react-redux'

import Search from './Search'

class PlantList extends React.Component {
  
  render() {
    const filteredPlants = this.props.plants.filter((plant) =>
    plant.common_name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
  )

  return(
    <div>
      <Search />
      <h1>PlantList</h1>
      <ul className="plantList">
        {filteredPlants.map((plant) => {

          return (
            <li><img src="{plant.img}" alt="PlantImage"/>{plant.common_name}</li>
          )
        })}
      </ul>
    </div>
    )
  }
}




function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
    searchTerm: globalState.search
  };
}
export default connect(mapStateToProps)(PlantList);
