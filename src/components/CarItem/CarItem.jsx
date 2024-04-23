import HeartIconBtn from 'components/HeartIconBtn/HeartIconBtn';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from 'store/favourites/FavSlice';
import { getFavourites } from 'store/favourites/selectros';

const CarItem = ({ car, onShowMore }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(getFavourites);

  const isFavourite = favourites.some(fav => fav._id === car._id);
  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(car));
    } else {
      dispatch(addFavourite(car));
    }
  };
  return (
    <div className="car-item">
      <HeartIconBtn isFavourite={isFavourite} onClick={toggleFavourite} />
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
