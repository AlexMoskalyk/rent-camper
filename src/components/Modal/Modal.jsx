import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  // Подписываемся на нажатие клавиш только когда модальное окно открыто
  React.useEffect(() => {
    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
