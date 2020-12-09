import React from 'react'
import { Route } from 'react-router-dom'
import PlantList from './PlantList.jsx'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="logo-wrapper">
          <img
            className="logo-leaf-it-to-me"
            src="./images/LeafItToMe_Logo.svg"
          />
          <p>Leaf it to us</p>
        </div>
        <div className="main-img">
          <img src="./images/potted-plant.svg" />
        </div>
      </div>
      <div>
        <Route path="/" component={PlantList} />
      </div>
    </>
  )
}

export default Home
