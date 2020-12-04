import React from "react";
import { connect } from "react-redux";


class Search extends React.Component {
  state = {
    // plants: [],
    searchField: "",
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField } = this.state;
    const filteredPlants = this.props.plants.filter((plant) =>
      plant.common_name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredPlants);
    return (
      <div className="">
        <h2>Search</h2>
        <input
          onChange={this.handleChange}
          className="input"
          value={this.state.searchField}
          name="searchField"
          type="text"
        />
        <ul>
          {filteredPlants.map((plant) => {
              return ( 
            <li>
              <img src="{plant.img}" alt="PlantImage" />
              {plant.common_name}
            </li>
              )
          })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
  };
}

export default connect(mapStateToProps)(Search);
