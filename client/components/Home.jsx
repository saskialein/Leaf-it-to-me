import React from 'react';
import { Route } from 'react-router-dom';
import PlantList from './PlantList.jsx';
import { connect } from 'react-redux';

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated';

const Home = (props) => {
	// const loggedInUser = props.auth.user
	// console.log( loggedInUser)

	return (
    <>
                <div className="home">
				<div className="logo-wrapper">
					<img className="logo-leaf-it-to-me" src="./images/LeafItToMe_Logo.svg" />
					<IfNotAuthenticated>
          <div className="p-wrapper">
						<p>Helping house plant owners make their plants feel like bliss. Leaf it to us.</p>
            </div>
					</IfNotAuthenticated>
					<IfAuthenticated>
						{props.auth.user && (
              <div className="p-wrapper">
							<p>
								Kia ora {props.auth.user.name}, to add new plants to your profile browse through our
								jungle database below or hit the searchbar!
							</p>
              </div>
						)}
					</IfAuthenticated>
            </div>


				<div className="main-img">
					<img className='main-image'src="./images/potted-plant.svg" alt="" id="registerWelcomePage" />
				</div>
				</div>

			<div>
				<Route path="/" component={PlantList} />
			</div>
		</>
	);
};

function mapStateToProps(globalState) {
	return {
		auth: globalState.auth,
	};
}
export default connect(mapStateToProps)(Home);
