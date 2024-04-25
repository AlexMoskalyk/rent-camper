import React from 'react';
import sprite from '../../assets/sprite.svg';
import './Features.scss';

const featuresIcons = {
  adults: 'adults',
  engine: 'petrol',
  transmission: 'transmission',
  form: 'form',
  airConditioner: 'air-conditioner',
  kitchen: 'kitchen',
  beds: 'bed',
  TV: 'tv',
  CD: 'cd',
  radio: 'radio',
  shower: 'shower',
  toilet: 'toilet',
  freezer: 'freezer',
  microwave: 'microwave',
  gas: 'gas',
  water: 'water',
};

const Features = ({ features, details }) => {
  const allFeatures = { ...features, ...details };

  const getFeatureElements = () =>
    Object.entries(allFeatures).map(([key, value]) => {
      if (value && featuresIcons[key]) {
        return (
          <li key={key} className="feature-item">
            <svg className="feature-icon">
              <use href={`${sprite}#${featuresIcons[key]}`}></use>
            </svg>
            {featuresIcons[key]}
          </li>
        );
      }
      return null;
    });

  return <ul className="features-list">{getFeatureElements()}</ul>;
};

export default Features;
