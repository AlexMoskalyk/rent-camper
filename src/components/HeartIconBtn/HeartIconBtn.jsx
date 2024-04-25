import React from 'react';
import sprite from '../../assets/sprite.svg';

import './HeartIconBtn.scss';

const HeartIconBtn = ({ isFavourite, onClick }) => {
  return (
    <span onClick={onClick} className="heart-icon">
      {isFavourite ? (
        <svg className="icon icon-heart-filled">
          <use href={`${sprite}#favourite-check`} />
        </svg>
      ) : (
        <svg className="icon icon-heart-empty">
          <use href={`${sprite}#favourite`} />
        </svg>
      )}
    </span>
  );
};

export default HeartIconBtn;
