import React from 'react'
import { Link } from 'react-router-dom'

const Plant = (props) => {

  const plant = props.plant 

  return (
    <div>
   
    {/* <h1>Plant Comp rendered inside plantlist</h1>
    <p>Show a small card of the plant</p> */}

      <div className='profile-wrapper'>

      <div className='each-profile'>
      <div className='profile-picture'>
          <img src={`https://www.amara.com/static/uploads/images-2/products/huge/156501/big-cactus-cushion-603972.jpg`}/>
        <div className='profile-name-plate'>
          <p className='profile-name'>{plant.common_name}</p>
          <p className='profile-sign'>feeling fabulous</p>
          <Link to={`/plants/${plant.common_name}`}><button>Click me</button></Link>
        </div>
        </div>
      
        </div>
        </div>
       
        </div>
<<<<<<< HEAD

    </div>
    </>
||||||| merged common ancestors


    </div>
    </>
=======
>>>>>>> 556301d903579e29337a7eb8cf54eb037c678cc0
   
  )
}

export default Plant
