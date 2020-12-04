import React from 'react'
import { connect } from 'react-redux'

class AddPlantForm extends React.Component {
  state = {
    common_name: '',
    water: '',
    light: '',
    temp: '',
    humidity: '',
    img: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // submitHandler = (e) => {
  //   e.preventDefault()
  //   this.props.dispatch(addPlant({
  //     name: this.state.common_name,
  //   }))
  //   this.setState({
  //     name: '',
  //   })
  // }

  render() {
    return (
      <div>
        <form className="form">
          <h2>Enter Plant Detail</h2>
          <label className="addPlantFormLabel">Common Name: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.name}
            autoFocus={true}
            name="name"
            type="text"
          />
          <br />
          <label className="addPlantFormLabel">Water: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.water}
            name="water"
            type="text"
          />
          <br />
          <label className="addPlantFormLabel">Light: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.light}
            name="light"
            type="text"
          />
          <br />
          <label className="addPlantFormLabel">Temp: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.temp}
            name="temp"
            type="text"
          />
          <br />
          <label className="addPlantFormLabel">Humidity: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.humidity}
            name="humidity"
            type="text"
          />
          <button className="submitButton">Submit</button>
          {/* <button onClick ={(e) => this.submitHandler(e)} className='text-btn' type="submit"> Submit </button> */}
        </form>
      </div>
    )
  }
}

export default connect()(AddPlantForm)
