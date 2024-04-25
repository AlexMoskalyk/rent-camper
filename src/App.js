import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favourites" element={<FavouritesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
