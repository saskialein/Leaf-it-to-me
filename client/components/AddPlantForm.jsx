import React from 'react'
import { connect } from 'react-redux'

import { addPlant } from '../actions'

class AddPlantForm extends React.Component {
  state = {
    common_name: '',
    water: '',
    light: '',
    temp: '',
    humidity: '',
    img: '',
  }

  onChangeFile = (e) => {
    this.setState({[e.target.name]: e.target.files[0]})
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    // handle image first
    const plantImage = new FormData()
    plantImage.append('img', this.state.img)

    // handle other form data (plant image incl in action)
    const plantData = {
      common_name: this.state.common_name,
      water: this.state.water,
      light: this.state.light,
      temp: this.state.temp,
      humidity: this.state.humidity
    }

    this.props.dispatch(addPlant(plantImage, plantData))
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form encType='multipart/form-data' className='form' onSubmit={this.handleSubmit}>

          <label>Common Name: </label>
          <input onChange={this.handleChange} className='input' value={this.state.name} autoFocus={true} name="name" type="text"/>
          <br/>

          <label>Water: </label>
          <input onChange={this.handleChange} className='input' value={this.state.water}  name="water" type="text"/>

          <label>Light: </label> <input onChange={this.handleChange} className='input' value={this.state.light} name="light" type="text"/>

          <label>Temp: </label><input onChange={this.handleChange} className='input' value={this.state.temp} name="temp" type="text"/>

          <label>Humidity: </label><input onChange={this.handleChange} className='input' value={this.state.humidity} name="humidity" type="text"/>
          
          <label>Plant Image: </label><input onChange={this.onChangeFile} className='input' name="img" type="file" />
          
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddPlantForm)
