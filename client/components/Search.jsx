import React from "react"
import { connect } from "react-redux"
import { clearSearch, setSearchTerm } from "../actions/search";


class Search extends React.Component {
  state = {
    searchTerm: ""
  }

  handleChange = (e) => {  
    this.setState({ searchTerm: e.target.value })
    this.props.dispatch(setSearchTerm(e.target.value))
  }

  componentWillUnmount() {
    this.props.dispatch(clearSearch())
  }

  render() {
 
    return (
      <div className="">
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
