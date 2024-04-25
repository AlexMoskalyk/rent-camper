import HeartIconBtn from 'components/HeartIconBtn/HeartIconBtn';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from 'store/favourites/FavSlice';
import { getFavourites } from 'store/favourites/selectros';
import { ReactComponent as StarIcon } from '../../assets/star.svg';
import './CarItem.scss';
import sprite from '../../assets/sprite.svg';
import Features from 'components/Features/Features';

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
      <img
        src={car.gallery[0]}
        alt={car.name}
        width="290"
        height="310"
        className="car-image"
      />
      <div className="car-details">
        <div className="car-info">
          <h3>{car.name}</h3>
          <div>
            <span className="car-price">{car.price}$</span>
            <HeartIconBtn isFavourite={isFavourite} onClick={toggleFavourite} />
          </div>
        </div>
        <div className="car-rating">
          <span className="car-rating-stars">
            <StarIcon />
            {car.rating}({car.reviews.length}Reviews)
          </span>
          <span>
            <svg className="icon-location">
              <use href={`${sprite}#location`}></use>
            </svg>
            {car.location}
          </span>
        </div>
        <p className="text-container">{car.description}</p>
        <Features features={car} details={car.details} />

        <button className="btn-details" onClick={() => onShowMore(car)}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default CarItem;
