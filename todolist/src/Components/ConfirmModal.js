// src/components/ConfirmModal.js
import React from 'react';
import Modal from 'react-modal';
import './ConfirmModal.css'

Modal.setAppElement('#root'); // for accessibility

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm, message, index }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Confirmation {index}</h2>
      <p>{message || "Are you sure you want to proceed?"}</p>
      <button className='modalbtn' onClick={onConfirm}>Yes</button>
      <button className='modalbtn' onClick={onRequestClose}>No</button>
    </Modal>
  );
};

export default ConfirmModal;
