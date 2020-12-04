import React from "react";


import { connect } from 'react-redux'

class PlantList extends React.Component {
 
  render() {

  return(
    <div>
      <h1>PlantList</h1>
      <ul className="plantList">
        {this.props.plants.map((plant) => {

          return (
            <li key={plant.id}><img src="{plant.img}" alt="PlantImage"/>{plant.common_name}</li>
          )
        })}
      </ul>
    </div>
    )
  }
}




// function mapStateToProps(globalState) {
//   return {
//     plants: globalState.plants,
//   };
// }
export default connect()(PlantList);
