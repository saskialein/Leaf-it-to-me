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
    soil: '',
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
      humidity: this.state.humidity,
      soil: this.state.soil,
      notes: this.state.notes
    }

    this.props.dispatch(addPlant(plantImage, plantData))
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form encType='multipart/form-data' className='form' onSubmit={this.handleSubmit}>

          <label>Common Name: </label>
          <input onChange={this.handleChange} className='input' value={this.state.common_name} autoFocus={true} name="common_name" type="text"/>
          <br/>

          <label>Water: </label>
          <select onChange={this.handleChange} className='select' value={this.state.water}  name="water" type="text">
              <option value="">Select</option>
              <option value="Daily">Daily</option>
              <option value="Once per week">Once per week</option>
              <option value="Once every 1 to 2 weeks">Once every 1 to 2 weeks</option>
              <option value="Once every 2 weeks">Once every 2 weeks</option>
              <option value="Keep moist but not wet">Keep moist but not wet</option>
              <option value="Only when soil is completely dry">Only when soil is completely dry</option>
              <option value="Soak every 1 to 2 weeks">Soak every 1 to 2 weeks</option>
              </select>

          <label>Light: </label> 
          <select onChange={this.handleChange} className='select' value={this.state.light} name="light" type="text">
            <option value="">Select</option>
            <option value="Prefers shade">Prefers shade</option>
            <option value="Filtered medium">Filtered medium</option>
            <option value="Bright to medium">Bright to medium</option>
            <option value="Bright filtered">Bright filtered</option>
            <option value="Bright direct">Bright direct</option>
            <option value="Adaptable">Adaptable</option>
          </select>

          <label>Temp: </label>
            <select onChange={this.handleChange} className='select' value={this.state.temp} name="temp" type="text">
            <option value="">Select</option>
            <option value="Cool to warm">Cool to warm</option>
            <option value="Warm">Warm</option>
            <option value="Warm to hot">Warm to hot</option>
            <option value="Hot">Hot</option>
            <option value="Adaptable">Adaptable</option>
            </select>

          <label>Humidity: </label>
          <select onChange={this.handleChange} className='select' value={this.state.humidity} name="humidity" type="text">
            <option value="">Select</option>
            <option value="Low">Low</option>
            <option value="Low to moderate">Low to moderate</option>
            <option value="Moderate">Moderate</option>
            <option value="Moderate to high">Moderate to high</option>
            <option value="High">High</option>
            <option value="Adaptable">Adaptable</option>
            </select>

          <label>Soil: </label>
          <select onChange={this.handleChange} className='select' value={this.state.soil} name="soil" type="text">
            <option value="">Select</option>
            <option value="Holds moisture/dense">Holds moisture/dense</option>
            <option value="Well draining">Well draining</option>
            <option value="Soilless potting mix">Soilless potting mix</option>
            <option value="None">None</option>
          </select>

          <label>Plant Image: </label>
          <input onChange={this.onChangeFile} className='input' name="img" type="file"/>

          {/* //Adding notes is a stretch */}

          {/* <label>Notes: </label>
            <textarea onChange={this.handleChange} className='select' value={this.state.notes} name="notes" type="text">
            
            </textarea> */}
          
          <button>Submit</button>

        </form>
      </div>
    )
  }
}

export default connect()(AddPlantForm)


