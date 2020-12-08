import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { NavHashLink as NavLink } from 'react-router-hash-link';

// const customStyles = {
//   content : {
//     top : '30%',
//     left : '50%',
//     right : 'auto',
//     bottom : 'auto',
//     marginRight : '-50%',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: '#51c08f',
//     borderColor: '#307256',
//     borderWidth: '2px',
//     borderRadius: '20px',
//     padding: '60px 40px',
//     fontWeight: 'bolder'
//   }
// };

Modal.setAppElement('#app');

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
        <a
          href="#"
          className="nav-link"
          exact
          activeClassName="active"
          onClick={this.handleOpenModal}
        >
          Add Plant
        </a>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Option to add existing plant or create new plant"
          className="modal-button-extra"
        >
          <NavLink
            to={'/#search'}
            className="nav-link"
            onClick={this.handleCloseModal}
          >
            Add existing plant
          </NavLink>
          <NavLink
            to={'/plants/new'}
            className="nav-link"
            onClick={this.handleCloseModal}
          >
            Add new plant
          </NavLink>
          <NavLink
            to={'/plants/saved'}
            className="nav-link"
            onClick={this.handleCloseModal}
          >
            Back to profile
          </NavLink>
        </Modal>
      </>
    )
	}
}

export default connect()(ModalPopUp);
