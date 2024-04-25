import React from 'react';
import sprite from '../../assets/sprite.svg';

const featuresIcons = {
  adults: 'adults',
  children: 2,
  engine: 'petrol',
  transmission: 'transmission',
};

const CarFeatures = ({ features }) => {
  return (
    <div className="features-list">
      {Object.entries(features).map(([featureKey, value]) => {
        if (featuresIcons[featureKey]) {
          return (
            <div key={featureKey} className="feature-item">
              <svg className="feature-icon">
                <use href={`${sprite}#${featuresIcons[featureKey]}`}></use>
              </svg>
              <span className="feature-text">{value}</span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
