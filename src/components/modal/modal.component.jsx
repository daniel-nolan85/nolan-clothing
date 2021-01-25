import React from 'react';

import Modal from 'react-modal';

import './modal.styles.scss';

Modal.setAppElement('#root')
const MyModal = () => {
    const [modalIsOpen, setmodalIsOpen] = React.useState(true)
    return (
        <div>
            {/* <button onClick={() => setmodalIsOpen(true)}>Open modal</button> */}
            <Modal 
                className='my-modal' 
                isOpen={modalIsOpen} 
                onRequestClose={() => setmodalIsOpen(false)}
                // style= {
                //     {
                //         overlay: {
                //             backgroundColor: 'grey'
                //         },
                //         content: {
                //             backgroundColor: '#fff;'
                //         }
                //     }
                // }
            >
                <h2>This is a portfolio project</h2>
                <p>All items are contained for display purposes only</p>
                <button className='close' onClick={() => setmodalIsOpen(false)}>Got it</button>
            </Modal>
            
        </div>
    )
};

export default MyModal;