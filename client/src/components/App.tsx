import React, { useState } from 'react';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import './App.css';
import '../styles/centered.css';

const App = () => {

  const [favourites, setFavourites] = useState <Array<string>> ([]);

  const changeFavourite = (url:string) => {
    const favouritesIndex: number = favourites.indexOf(url);
    console.log(favouritesIndex);
    
    if (favouritesIndex === -1) {
      //if it's not in the list add it
      console.log('adding');
      
      setFavourites([...favourites, url]);
    } else {
      //if it's in the list remove it
      console.log('removing');
      setFavourites(favourites.filter(dog => dog !==url));
    };
  };

  return (
    <div className='App centered'>
      <ShowDogs 
        favourites={favourites} 
        changeFavourite={(url : string) => changeFavourite(url)}/>
      <FavouriteDogs 
        favourites={favourites}/>
    </div>
  );
};

export default App;