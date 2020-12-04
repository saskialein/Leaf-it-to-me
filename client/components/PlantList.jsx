import React from "react";
import Plant from "./Plant"
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


      <div className="profile-wrapper">
        {this.props.plants.map((plant) => {

          return (
            <Plant key={plant.id} plant={plant}/>
          )
        })}
      </div>
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
