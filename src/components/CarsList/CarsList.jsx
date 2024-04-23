import CarItem from '../CarItem/CarItem';

function CarsList({ cars, onShowMore }) {
  return (
    <div>
      {cars.map(car => (
        <CarItem key={car._id} car={car} onShowMore={onShowMore} />
      ))}
    </div>
  );
}

export default CarsList;
