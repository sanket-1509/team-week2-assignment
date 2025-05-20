import React from 'react';
import Modal from 'react-modal';
import './ConfirmModal.css'

Modal.setAppElement('#root');

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Confirmation</h2>
      <p>{message || "Are you sure you want to proceed?"}</p>
      <button className='modalbtn' onClick={onConfirm}>Yes</button>
      <button className='modalbtn' onClick={onRequestClose}>No</button>
    </Modal>
  );
};

export default ConfirmModal;
