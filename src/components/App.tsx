import React, { useState, useEffect } from 'react';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import './App.css';
import '../styles/centered.css';

const App = () => {

  const [favourites, setFavourites] = useState <Array<string>> ([]);
  const [alertShown, setAlertShown] = useState <Boolean> (false);

  useEffect(() => {
    const favouriteList = async () => {

      await fetch('http://localhost:8080/getdogs', 
      {
        method: 'GET'
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
    };

    favouriteList();

    // const data = fetch('http://localhost:8080/getdogs', {
    //     method: 'GET'
    //   })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   })
      
  }, []);






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