import React, { useState, useEffect } from 'react';
import {getDogs, addDog, removeDog} from '../api';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import '../styles/bestdogs.css';

interface Dog {
  id: string
};

const App = () => {

  const [favourites, setFavourites] = useState <string[]> ([]);

  useEffect(() => {
    getDogs()
    .then(setFavourites)
    .catch(err => {
      console.log(err);
    });
  }, []);

  const changeFavourite = (url : string) => {
    const favouritesIndex: number = favourites.indexOf(url);
    if (favouritesIndex === -1) {
      addDog(url)
      .then(res => {
        setFavourites(res);
      });
    } else {
      removeDog(url)
      .then(res => {
        setFavourites(res);
      });
    };
  };

  return (
    <div className='app'>
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