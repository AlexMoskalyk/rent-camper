import { useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import { selectCars } from 'store/cars/selectors';

function CarsList({ onShowMore }) {
  const cars = useSelector(selectCars);
  return (
    <div>
      {cars.map(car => (
        <CarItem key={car._id} car={car} onShowMore={onShowMore} />
      ))}
    </div>
  );
}

export default CarsList;
