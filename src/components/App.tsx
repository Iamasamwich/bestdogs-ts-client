import React, { useState } from 'react';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import './App.css';
import '../styles/centered.css';

const App = () => {

  const [favourites, setFavourites] = useState <Array<string>> ([]);
  const [alertShown, setAlertShown] = useState <Boolean> (false);

  const changeFavourite = (url:string) => {
    const favouritesIndex: number = favourites.indexOf(url);
    if (favouritesIndex === -1) {
      setFavourites([...favourites, url]);
    } else {
      if (!alertShown) {
        alert('You just removed a dog. You MONSTER!');
        setAlertShown(true);
      };
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