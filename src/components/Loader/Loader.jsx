import React from 'react';
import ReactDOM from 'react-dom';
import { TailSpin } from 'react-loader-spinner';
import './Loader.scss';
const Loader = ({ isVisible }) => {
  //   if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <TailSpin color="#e44d48" height={80} width={80} />
    </div>,
    document.getElementById('modal-root')
  );
};

export default Loader;
