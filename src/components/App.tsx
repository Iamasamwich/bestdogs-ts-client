import React, { useState, useEffect } from 'react';
import {getDogs, addDog, removeDog} from '../api';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import './App.css';
import './centered.css';

const App = () => {

  const [favourites, setFavourites] = useState <string[]> ([]);

  useEffect(() => {
    getDogs()
    .then(setFavourites)
    .catch(err => {
      console.log(err);
    });
  }, []);

  const changeFavourite = (url:string) => {
    const favouritesIndex: number = favourites.indexOf(url);
    if (favouritesIndex === -1) {
      addDog(url)
      .then(res => {
        setFavourites(res.list);
      });
    } else {
      removeDog(url)
      .then(res => {
        setFavourites(res.list);
      });
    };
  };

  return (
    <div className='App centered'>
      <ShowDogs 
        favourites={favourites} 
        changeFavourite={(url) => changeFavourite(url)}/>
      <FavouriteDogs 
        favourites={favourites}
        changeFavourite={(url) => changeFavourite(url)}/>
    </div>
  );
};

export default App;