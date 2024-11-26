import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ src, alt, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <img src={src} alt={alt} className={styles.modalImage} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;