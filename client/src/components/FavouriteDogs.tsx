import React from 'react';

import './FavouriteDogs.css';

interface PropsType {
  favourites: Array<string>;
};

const FavouriteDogs = ({favourites} :PropsType) => {

  console.log(favourites);
  

  return (
    <div className='FavouriteDogs'>
      {favourites.map(dog => {
        return <p>{dog}</p>
      })}
    </div>
  );
};

export default FavouriteDogs;