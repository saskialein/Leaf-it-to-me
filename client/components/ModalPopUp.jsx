import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const customStyles = {
  content : {
    top : '30%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#51c08f',
    borderColor: '#307256',
    borderWidth: '2px',
    borderRadius: '20px',
    padding: '60px 40px'
  }
};

Modal.setAppElement('#app');
<<<<<<< HEAD
// test2
||||||| 2cff729
// test
=======
>>>>>>> b9843b4238f65d94f7c4b1ff6b5cb72629719d5f
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
<<<<<<< HEAD
    <NavLink to= "/" activeClassName="active"
            className="nav-link"
            id="nav-btn-savedPlants"onClick={this.handleOpenModal}>Add Plant
      </NavLink>
||||||| 2cff729
    <button onClick={this.handleOpenModal}>Add Plant</button>
=======
    <button className="nav-link" id="nav-btn-addNewPlant" onClick={this.handleOpenModal}>Add Plant</button>
>>>>>>> b9843b4238f65d94f7c4b1ff6b5cb72629719d5f
    <Modal 
          isOpen={this.state.showModal}
          contentLabel="Option to add existing plant or create new plant"
          style={customStyles}
        >
        
          <NavLink to={'/#search'} className="nav-link"><button className='modal-button' onClick={this.handleCloseModal}>Add existing plant to profile</button></NavLink>
          <NavLink to={'/plants/new'} className="nav-link"><button className='modal-button' onClick={this.handleCloseModal}>Add new plant</button></NavLink>
          <NavLink to={'/plants/saved'} className="nav-link"><button className='modal-button' onClick={this.handleCloseModal}>Back to profile</button></NavLink>
    </Modal>
    </>
    )
	}
}

export default connect()(ModalPopUp);
