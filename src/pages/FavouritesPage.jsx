import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CarsList from 'components/CarsList/CarsList';
import Loader from 'components/Loader/Loader';

import Modal from 'components/Modal/Modal';
import CarDetails from 'components/CarDetails/CarDetails';
import { getFavourites } from 'store/favourites/selectros';

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
        <h1>NOTHING</h1>
      ) : (
        <div>
          <h1>Catalog of Cars</h1>
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
