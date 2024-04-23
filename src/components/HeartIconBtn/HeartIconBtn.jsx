import React from 'react';
import sprite from '../../assets/sprite.svg';

const HeartIconBtn = ({ isFavourite, onClick }) => {
  return (
    <button onClick={onClick} className="heart-icon">
      {isFavourite ? (
        <svg className="icon icon-heart-filled">
          <use href={`${sprite}#favourite-check`} />
        </svg>
      ) : (
        <svg className="icon icon-heart-empty">
          <use href={`${sprite}#favourite`} />
        </svg>
      )}
    </button>
  );
};

export default HeartIconBtn;
