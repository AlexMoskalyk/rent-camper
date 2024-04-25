import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import CarsList from 'components/CarsList/CarsList';

import Modal from 'components/Modal/Modal';
import CarDetails from 'components/CarDetails/CarDetails';
import { getFavourites } from 'store/favourites/selectros';

import './FavouritesPage.scss';
import { Link } from 'react-router-dom';

function FavouritesPage() {
  const favourites = useSelector(getFavourites);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleShowMoreClick = car => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  return (
    <>
      {favourites.length === 0 ? (
        <div className="empty-favourites">
          <h1 className="empty-favourites-title">
            Your favorites list is empty
          </h1>
          <p className="empty-favourites-text">
            Looks like you haven't added any campers to your favorites yet.
            Start exploring and select your dream camper!
          </p>
          <Link to="/catalog" className="empty-favourites-link">
            Go to Catalog
          </Link>
        </div>
      ) : (
        <div>
          <CarsList cars={favourites} onShowMore={handleShowMoreClick} />
        </div>
      )}

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <>
            <CarDetails selectedCar={selectedCar} />
          </>
        </Modal>
      )}
    </>
  );
}

export default FavouritesPage;
