import React from "react";
import Plant from "./Plant"
import { connect } from 'react-redux'
import Search from './Search'

class PlantList extends React.Component {

  render() {
    
    const filteredPlants = this.props.plants.filter((plant) =>
      plant.common_name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    )

    return (
      <div>
        <Search />
        <div className="smallPlant-wrapper">
          {filteredPlants.map((plant) => <Plant key={plant.id} plant={plant} history={this.props.history}/>)}
        </div>
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
