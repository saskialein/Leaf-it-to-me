import React from 'react'
import { Link } from 'react-router-dom'

const Plant = (props) => {

  const plant = props.plant 

  return (
    <div>
  
      <div className='each-profile'>
      <div className='profile-picture'>
          <img src= {plant.img}/>
        <div className='profile-name-plate'>
          <h4 className='name'>{plant.common_name}</h4>
          <p className='species'>{plant.species_name}</p>
        </div>
        <div className='button-plate'>
          <Link to={`/plants/${plant.common_name}`}><button>More info</button></Link>
          <button>add to my profile</button>
      
        </div>
        </div>
      
        </div>
        </div>
      
   
  )
}

export default Plant
