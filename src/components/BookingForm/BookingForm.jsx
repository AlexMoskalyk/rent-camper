import React, { useState } from 'react';

import './BookingForm.scss';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.bookingDate) {
      errors.bookingDate = 'Booking date is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form data is valid:', formData);
      // Здесь можно добавить логику отправки формы
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Book your campervan now</h3>
      <p className="booking-form-text">
        Stay connected! We are always ready to help you.
      </p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      {errors.name && <p>{errors.name}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        type="date"
        name="bookingDate"
        value={formData.bookingDate}
        onChange={handleChange}
        placeholder="Booking date"
      />
      {errors.bookingDate && <p>{errors.bookingDate}</p>}

      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Comment"
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default BookingForm;
