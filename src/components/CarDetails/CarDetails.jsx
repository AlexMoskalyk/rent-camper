import BookingForm from 'components/BookingForm/BookingForm';
import React, { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import './CarDetails.scss';
import Features from 'components/Features/Features';

const CarDetails = ({ selectedCar }) => {
  const [activeTab, setActiveTab] = useState('features');

  const renderReviews = () => {
    return selectedCar.reviews.map((review, index) => (
      <div key={index} className="review">
        <div className="review-header">
          <span className="reviewer-initial-letter">
            {review.reviewer_name.charAt(0)}
          </span>
          <div className="reviewer-details">
            <p className="reviewer-name">{review.reviewer_name}</p>
            <p className="reviewer-rating">
              {'⭐'.repeat(review.reviewer_rating)}
            </p>
          </div>
        </div>
        <p className="review-comment">{review.comment}</p>
      </div>
    ));
  };

  const specificDetails = {
    form: selectedCar.form,
    length: selectedCar.length,
    width: selectedCar.width,
    height: selectedCar.height,
    tank: selectedCar.tank,
    consumption: selectedCar.consumption,
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const vehicleDetails = () => {
    return (
      <div className="vehicle-details">
        <h3>Vehicle details</h3>
        <div className="details-grid">
          {Object.entries(specificDetails).map(([key, value]) => (
            <div key={key} className="detail">
              <span className="detail-key">{capitalizeFirstLetter(key)}:</span>
              <span className="detail-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const photoGallery = () => {
    return selectedCar.gallery.map((photo, index) => (
      <img
        key={index}
        src={photo}
        alt={selectedCar.name}
        width="290"
        height="310"
        className="gallery-item "
      />
    ));
  };

  return (
    <div>
      <h2 className="car-name">{selectedCar.name}</h2>
      <div className="car-rating">
        <span className="car-rating-stars">
          <StarIcon />
          {selectedCar.rating}({selectedCar.reviews.length}Reviews)
        </span>
        <span>
          <svg className="icon-location">
            <use href={`${sprite}#location`}></use>
          </svg>
          {selectedCar.location}
        </span>
      </div>
      <div className="car-price">{selectedCar.price}$</div>
      <div className="gallery-container">{photoGallery()}</div>
      <p className="text-container">{selectedCar.description}</p>

      <div className="tab-switcher">
        <button
          className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
          onClick={() => setActiveTab('features')}
        >
          Features
          {activeTab === 'features' && <div className="active-underline"></div>}
        </button>
        <button
          className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
          {activeTab === 'reviews' && <div className="active-underline"></div>}
        </button>
      </div>

      <div className="car-details-wrapper">
        <div>
          {activeTab === 'features' && (
            <>
              <Features features={selectedCar} details={selectedCar.details} />
              {vehicleDetails()}
            </>
          )}
          {activeTab === 'reviews' && renderReviews()}
        </div>

        <div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
