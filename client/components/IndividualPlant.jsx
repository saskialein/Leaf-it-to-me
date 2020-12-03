import React from "react";
import { connect } from 'react-redux'

const IndividualPlant = (props) => {
  const name = props.match.params.name;

  return (
    <div className="">
      {props.plants
        .filter((plant) => plant.common_name == name)
        .map((plant) => {
          return (
            <div key={plant.id}>
              <div className="">
                <h2 className="">{plant.common_name}</h2>
                <p>{plant.species_name}</p>
                <img
                  src={`https://www.amara.com/static/uploads/images-2/products/huge/156501/big-cactus-cushion-603972.jpg`}
                />
                <h3 className="">Plant Care Details:</h3>
              </div>
              <div className="">
                <ul className="">
                  <li>{plant.water}</li>
                  <li>{plant.light}</li>
                  <li>{plant.temp}</li>
                  <li>{plant.humidity}</li>
                  <li>{plant.soil}</li>
                  <li>{plant.lvl}</li>
                  <li>{plant.more}</li>
                </ul>
              </div>

              <button className="" href="">
                Add Plant to Profile
              </button>
            </div>
          );
        })}
    </div>
  );
};

function mapStateToProps(globalState) {
  return {
    plants: globalState.plants,
  };
}
export default connect(mapStateToProps)(IndividualPlant);

