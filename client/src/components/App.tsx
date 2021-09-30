import React from 'react';
import ShowDogs from './ShowDogs';
import FavouriteDogs from './FavouriteDogs';

import './App.css';
import '../styles/centered.css';


const App = () => {
  return (
    <div className='App centered'>
      <ShowDogs />
      <FavouriteDogs />
    </div>
  );
};

export default App;