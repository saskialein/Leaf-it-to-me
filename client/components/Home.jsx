import React from 'react'
import { Route } from 'react-router-dom'
import PlantList from './PlantList.jsx'

const Home = () => {
  return (
    <>
      <div className="home">
        <img className="main-img" src="./images/potted-plant.svg" />
        <div className="homeBanner">
          <img
            className="logo-leaf-it-to-me"
            src="./images/LeafItToMe_Logo.svg"
          />
          <p>Leaf it to us</p>
        </div>
      </div>
      <div>
        <Route path="/" component={PlantList} />
      </div>
    </>
  )
}

export default Home
