import React from "react";

const IndividualPlant = () => {
  return (
    <div className="individ-plant-main">
      <h2 className="individ-plant-">Common Name</h2>
      <h3>species_name</h3>
      <p>Show a large card of the plant + the details</p>

      <img
        src={`https://www.amara.com/static/uploads/images-2/products/huge/156501/big-cactus-cushion-603972.jpg`}
      />

      <h3>Plant Care Detail</h3>
      <p>
        The details for caring for the plant. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Praesentium inventore sunt facere saepe
        ratione numquam dicta aut qui voluptatem cupiditate adipisci, nesciunt
        debitis? Quo aspernatur ut aperiam obcaecati odio ea.
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

      <button>Add Plant to profile</button>
    </div>
  );
};

export default IndividualPlant;

{
  /* <div className="">
        <h2 className="">{props.plant.common_name}</h2>
        <p>{props.plant.species_name}</p>
        <img className="" src={props.plant.img} />
        <h3 className="">Plant Care Detail</h3>
      </div>
      <div className="">
        <ul className="">
          <li>{props.plant.water}</li>
          <li>{props.plant.light}</li>
          <li>{props.plant.temp}</li>
          <li>{props.plant.humidity}</li>
          <li>{props.plant.soil}</li>
          <li>{props.plant.lvl}</li>
          <li>{props.plant.more}</li>
        </ul>
      </div>
      <button className="" href="">
        Add Plant to Profile
      </button> */
}
