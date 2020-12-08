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
      humidity: this.state.humidity,
      notes: this.state.notes
    }

    this.props.dispatch(addPlant(plantImage, plantData))
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <form encType='multipart/form-data' className='form' onSubmit={this.handleSubmit}>
        <div className="label-input-relations">
          <label className='label'>Common Name: </label>
          <input onChange={this.handleChange} className='input' value={this.state.common_name} autoFocus={true} name="common_name" type="text"/>
          <br/>

        </div>
        <div className="dropDown-wrapper">
          <label className='label'>Water: </label>
          <select onChange={this.handleChange} className='select' value={this.state.water}  name="water" type="text">
              <option value="">Select</option>
              <option value="once per week">once per week</option>
              <option value="only when soil is completely dry">only when soil is completely dry</option>
              <option value="keep moist but not wet">keep moist but not wet</option>
              <option value="one to two weeks">one to two weeks</option>
              <option value="once every 2 weeks">once every 2 weeks</option>
              <option value="soak every 1-2 weeks">soak every 1-2 weeks</option>
              </select>
              <br/>

          <label className='label'>Light: </label> 
          <select onChange={this.handleChange} className='select' value={this.state.light} name="light" type="text">
            <option value="">Select</option>
            <option value="bright-medium indirect">bright-medium indirect</option>
            <option value="filtered indirect">filtered indirect</option>
            <option value="bright indirect">bright indirect</option>
            <option value="full shade">full shade</option>
            <option value="bright filtered-full shade">bright filtered-full shade</option>
            <option value="bright filtered-can tolerate direct">bright filtered-can tolerate direct</option>
            <option value="filtered medium">filtered medium</option>
            <option value="low">low</option>
            <option value="direct">direct</option>
          </select>
          <br/>

          <label className='label'>Temp: </label>
            <select onChange={this.handleChange} className='select' value={this.state.temp} name="temp" type="text">
            <option value="">Select</option>
            <option value="cool">cool</option>
            <option value="cool-warm">cool-warm</option>
            <option value="cool-hot">cool-hot</option>
            <option value="warm">warm</option>
            <option value="warm-hot">warm-hot</option>
            <option value="hot">hot</option>
            </select>
            <br/>

          <label className='label'>Humidity: </label>
          <select onChange={this.handleChange} className='select' value={this.state.humidity} name="humidity" type="text">
            <option value="">Select</option>
            <option value="low">low</option>
            <option value="low-moderate">low-moderate</option>
            <option value="moderate">moderate</option>
            <option value="moderate-high">moderate-high</option>
            <option value="high">high</option>
            <option value="adaptable">adaptable</option>
            </select>
            <br/>
            
          </div>
          <div className="addImage-Holder"> 
          <label className="addImage">+ Add Image: </label>
          <input onChange={this.onChangeFile} className='input' name="img" type="file"/>
        </div> 
          {/* <label>Notes: </label>
            <textarea onChange={this.handleChange} className='select' value={this.state.notes} name="notes" type="text">
            
            </textarea> */}
          <br/>
          <button className="submitButton">Add plant</button>

        </form>
      </div>
    )
  }
}

export default connect()(AddPlantForm)


