import React from 'react'
import { Route } from 'react-router-dom'

import PlantList from './PlantList.jsx'

const Home = () => {
  return (
    <>
      <div className="home">
        <img
          className="main-img"
          src="./images/potted-plant-transparent-background-5.png"
          alt=""
        />
        <div className="homerBanner">
          <h2>LEAF IT TO ME</h2>
          <h3>PLANT CARE MADE EASY</h3>
          <p>
            Helping house plant owners, make their plants feel like bliss. Leaf
            it to us.
          </p>
        </div>
      </div>
      <div>
        <Route path="/" component={PlantList} />
      </div>
    </>
  )
}

export default Home
