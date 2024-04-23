import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from 'store/cars/selectors';
import CarsList from 'components/CarsList/CarsList';
import Loader from 'components/Loader/Loader';
import { getCars } from 'store/cars/operations';
import Modal from 'components/Modal/Modal';
import CarDetails from 'components/CarDetails/CarDetails';

function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getCars(page));
    }
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(getCars(nextPage));
  };

  const handleShowMoreClick = car => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div>
        <h1>Catalog of Cars</h1>
        <CarsList cars={cars} onShowMore={handleShowMoreClick} />

        <button onClick={handleLoadMore} disabled={isLoading}>
          Load more
        </button>
      </div>

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

export default CatalogPage;
