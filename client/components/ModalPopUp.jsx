import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { NavHashLink as NavLink } from 'react-router-hash-link';


Modal.setAppElement('#app');

const customStyles = {
  content: {
    top: '30%',
    left: '25%',
    right: 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform: 'translate(-50%; -50%)',
    backgroundColor: '#51c08f',
    borderColor: '#307256',
    borderWidth: '2px',
    borderRadius: '20px',
    padding: '60px 40px',
    fontWeight: 'bolder',
  }
}

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
    <a href='#'className="nav-link" exact="true" activeclassname="active"
            onClick={this.handleOpenModal}>Add Plant
     </a>
    <Modal 
          isOpen={this.state.showModal}
          contentLabel="Option to add existing plant or create new plant"
          style={customStyles}
        >
        
          <NavLink to={'/#search'} className="navy-link" onClick={this.handleCloseModal} id="link-to-add-existing-plant" >Add existing</NavLink>
          <NavLink to={'/plants/new'} className="navy-link" onClick={this.handleCloseModal} id="link-to-add-new-plant" >Add new</NavLink>
          <NavLink to={'/plants/saved'} className="navy-link" onClick={this.handleCloseModal} id="link-back-to-profile" >Back to profile</NavLink>
    </Modal>
    </>
    )
	}
}

export default connect()(ModalPopUp);
