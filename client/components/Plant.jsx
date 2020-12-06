import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPlantToUsersPlantsDB } from '../apis/plants'

import { addPlantToReduxandDb, currentPlant } from '../actions/index'

const Plant = (props) => {

  const plant = props.plant 
  const handleClick = () => {
    console.log('hi i am handleclick')
    // props.dispatch(addPlantToReduxandDb(plant.id)
  } 
  return (
    <div>
   
    {/* <h1>Plant Comp rendered inside plantlist</h1>
    <p>Show a small card of the plant</p> */}

      

      <div className='each-profile'>
      <div className='profile-picture'>
          <img src={`https://www.amara.com/static/uploads/images-2/products/huge/156501/big-cactus-cushion-603972.jpg`}/>
        <div className='profile-name-plate'>
          <p className='profile-name'>{plant.common_name}</p>
          <p className='profile-sign'>feeling fabulous</p>
          <button onClick={handleClick}>Add Me</button>
          <Link to={`/plants/${plant.common_name}`}><button>Click me</button></Link>
        </div>
        </div>
      
        </div>
        </div>
      
   
  )
}

export default connect()(Plant)
