import React, { useState, useEffect } from 'react';
import {getDogs, addDog, removeDog} from '../api';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import './App.css';
import '../styles/centered.css';

const App = () => {

  const [favourites, setFavourites] = useState <Array<string>> ([]);

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
      addDog(url);
      setFavourites([...favourites, url]);
    } else {
      removeDog(url);
      setFavourites(favourites.filter(dog => dog !==url));
    };
  };

  return (
    <div className='App centered'>
      <ShowDogs 
        favourites={favourites} 
        changeFavourite={(url : string) => changeFavourite(url)}/>
      <FavouriteDogs 
        favourites={favourites}
        changeFavourite={(url:string) => changeFavourite(url)}/>
    </div>
  );
};

export default App;