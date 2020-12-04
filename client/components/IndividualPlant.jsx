import React from "react";
import { connect } from 'react-redux'

import { addPlantToReduxandDb } from '../actions/index'

const IndividualPlant = (props) => {

  const plant = {
    plant_id: 4,
    user_id: 2
  }

  return (
    <div className='individ-plant-main'>
   
    <h2 className='individ-plant-'>Common Name</h2>
    <h3>species_name</h3>
    <p>Show a large card of the plant + the details</p>
    

    <img src={`https://www.amara.com/static/uploads/images-2/products/huge/156501/big-cactus-cushion-603972.jpg`}/>

      <h3>Plant Care Detail</h3>
      <p>The details for caring for the plant. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium inventore sunt facere saepe ratione numquam dicta aut qui voluptatem cupiditate adipisci, nesciunt debitis? Quo aspernatur ut aperiam obcaecati odio ea.
      </p>

      <ul className="">
          <li>water</li>
          <li>light</li>
          <li>temp</li>
          <li>humidity</li>
          <li>soil</li>
          <li>lvl</li>
          <li>more</li>
        </ul>

      <button onClick={() => {props.dispatch(addPlantToReduxandDb(plant))}}>Add Plant to profile</button>
    </div>
  );
};

export default connect() (IndividualPlant)

 