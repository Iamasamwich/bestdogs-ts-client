import React, { useState, useEffect } from 'react';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import './App.css';
import '../styles/centered.css';

const App = () => {

  const [favourites, setFavourites] = useState <Array<string>> ([]);

  useEffect(() => {
    (async () => {
      await fetch('http://localhost:8080/getdogs')
      .then(res => res.json())
      .then(res => {
        setFavourites(res.list);
      })
      .catch(err => {
        console.log(err);
      });
    })();
  }, []);

  const addDog = async (url: string) => {
    const resp = await fetch('http://localhost:8080/adddog', 
      {
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          dog: url
        })
      }
    )
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
    console.log('xx', resp)
  };

  const removeDog = async (url: string) => {
    const resp = await fetch('http://localhost:8080/removedog', 
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dog: url
      })
    })
    .then(res => res.json())
    .catch(err => {
      console.log(err);
    });
    console.log('yy', resp);
  };

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