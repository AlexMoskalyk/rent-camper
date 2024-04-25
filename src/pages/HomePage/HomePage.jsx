import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.scss';

function HomePage() {
  let navigate = useNavigate(); // Замените useHistory на useNavigate

  const navigateToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div className="home-container">
      <h1 className="title">Choose your camper</h1>
      <button className="choose-btn" onClick={navigateToCatalog}>
        Choose
      </button>
    </div>
  );
}

export default HomePage;
