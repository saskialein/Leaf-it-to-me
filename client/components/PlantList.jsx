import React from "react";
import Plant from "./Plant.jsx";
import { fetchPlants } from "../actions/index";
import { connect } from 'react-redux'

class PlantList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlants());
  }
  render() {

  return(
    <div>
      <h1>PlantList</h1>
      <ul className="plantList">
        {this.props.plants.map((plant) => {

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
  };
}
export default connect(mapStateToProps)(PlantList);
