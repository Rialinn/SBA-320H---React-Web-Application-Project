import { useState, useEffect } from "react";
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import SearchFilter from './components/SearchFilter';
import Toggle from './components/Toggle';
import NotFound from './components/NotFound';
import FavoritesList from "./components/FavoritesList";


function App() {
    // to track the list of favorite items
  const [favorites, setFavorites] = useState([]);


  // Function to update favorites
  const updateFavorites = (artwork, isFavorite) => {
    if (isFavorite) {
        setFavorites([...favorites, artwork]); // Add artwork to favorites
    } else {
        const updatedFavorites = favorites.filter(item => item.id !== artwork.id); // Remove artwork from favorites
        setFavorites(updatedFavorites);
    }
};


  return (
    <>
      <Navbar favorites={favorites} />
        <Routes>
          <Route path='/favorites' element={<FavoritesList favorites={favorites} />} />
          {/* <Route path='/favorites' element={<FavoritesList favorites={favorites} updateFavorites={updateFavorites} />} /> */}
          <Route path='/' element={<MainPage updateFavorites={updateFavorites} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <SearchFilter />
      <Toggle />
    </>
  )
}

export default App;