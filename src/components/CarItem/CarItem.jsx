import React from 'react';

const CarItem = ({ car, onShowMore }) => {
  return (
    <div className="car-item">
      <h2>{car._id}</h2>
      <img src={car.gallery[0]} alt={car.name} className="car-image" />
      <div className="car-details">
        <h3>{car.name}</h3>

        <div className="car-price">${car.price}</div>
        <button className="btn-details" onClick={() => onShowMore(car)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarItem;
