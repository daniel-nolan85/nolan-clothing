import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import './modal.styles.scss';

Modal.setAppElement('#root');
const MyModal = () => {
  const [modalIsOpen, setmodalIsOpen] = React.useState(true);

  const history = useHistory(); // Initialize useHistory

  const closeModal = () => {
    setmodalIsOpen(false);
    history.push('/'); // Redirect to homepage after closing modal
  };

  return (
    <div>
      <Modal
        className='my-modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2>This is a portfolio project</h2>
        <p>All items are contained for display purposes only</p>
        <button className='close' onClick={closeModal}>
          Got it
        </button>
      </Modal>
    </div>
  );
};

export default MyModal;
