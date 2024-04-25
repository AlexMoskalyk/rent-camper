import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import CatalogPage from './pages/CatalogPage';
import FavouritesPage from './pages/FavouritesPage';
import CarDetailsPage from './pages/CarDetailsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
          <Route path="catalog/:id" element={<CarDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
