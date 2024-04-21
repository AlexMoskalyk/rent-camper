import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../store/cars/operations';
import CarItem from '../CarItem/CarItem';
import { selectCars, selectError, selectIsLoading } from 'store/cars/selectors';

function CarsList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('Fetching cars for page: ', page);
    dispatch(fetchCars({ page }));
  }, [dispatch, page]);

  return <div>CarsList</div>;
}

export default CarsList;
