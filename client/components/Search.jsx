import React from "react"
import { connect } from "react-redux"
import { setSearchTerm } from "../actions/search";


class Search extends React.Component {
  state = {
    searchTerm: ""
  }

  handleChange = (e) => {
    
    this.setState({ searchTerm: e.target.value })
    this.props.dispatch(setSearchTerm(e.target.value))
  };

  render() {
 
    return (
      <div className="">
        <h2>Search</h2>
        <input
          onChange={this.handleChange}
          className="input"
          value={this.state.searchTerm}
          name="searchTerm"
          type="text"
        />
     
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
  }
}

export default connect(mapStateToProps)(Search)
