import React from 'react';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import Plant from './Plant';
import Modal from 'react-modal';
import { NavHashLink as NavLink } from 'react-router-hash-link';

Modal.setAppElement('#app');
// test2
class ModalPopUp extends React.Component {

  state = {
    showModal: false,
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
    
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }


	render() {
		return (
    <>
    <NavLink to= "/" activeClassName="active"
            className="nav-link"
            id="nav-btn-savedPlants"onClick={this.handleOpenModal}>Add Plant
      </NavLink>
    <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
        
          <NavLink to={'/#search'}><button onClick={this.handleCloseModal}>Add existing plant to profile</button></NavLink>
          <NavLink to={'/plants/new'}><button onClick={this.handleCloseModal}>Add new plant</button></NavLink><NavLink to={'/plants/saved'}>
          <button onClick={this.handleCloseModal}>Back to profile</button></NavLink>
        </Modal>
    </>
    )
	}
}

export default connect()(ModalPopUp);
