import React from 'react'
import { Route } from 'react-router-dom'

import PlantList from './PlantList.jsx'


const Home = () => {
  return (
    <div>
  
   <div className="home">

        <img className="main-img" src="./potted-plant-transparent-background-5.png" alt=""/>
        <div>
            <h2>This is plant care made easy</h2>
            <h3>We are Home Branch. Helping house plant owners, make their plants feel like bliss. Leaf it to us.</h3>
        </div>
    </div>


    <Route path='/' component={PlantList}/>
   
    </div>
  )
}

export default Home
