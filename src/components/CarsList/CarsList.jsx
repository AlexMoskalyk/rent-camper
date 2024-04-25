import CarItem from '../CarItem/CarItem';

import './CarsList.scss';

function CarsList({ cars, onShowMore }) {
  return (
    <div className="cars-list">
      {cars.map(car => (
        <CarItem key={car._id} car={car} onShowMore={onShowMore} />
      ))}
    </div>
  );
}

export default CarsList;
