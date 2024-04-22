import BookingForm from 'components/BookingForm/BookingForm';
import React, { useState } from 'react';

const CarDetails = ({ selectedCar }) => {
  const [activeTab, setActiveTab] = useState('features');

  const renderFeatures = () => {
    // Преобразовываем объект details в массив элементов для отображения
    return Object.entries(selectedCar.details).map(([key, value], index) => {
      if (value) {
        return <div key={index}>{`${key}: ${value}`}</div>;
      }
      return null;
    });
  };

  const renderReviews = () => {
    return selectedCar.reviews.map((review, index) => (
      <div key={index}>
        <p>{review.reviewer_name}</p>
        <p>{'⭐'.repeat(review.reviewer_rating)}</p>
        <p>{review.comment}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>{selectedCar.name}</h2>

      <button onClick={() => setActiveTab('features')}>Features</button>
      <button onClick={() => setActiveTab('reviews')}>Reviews</button>

      <div>
        <div>
          {activeTab === 'features' && renderFeatures()}
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
