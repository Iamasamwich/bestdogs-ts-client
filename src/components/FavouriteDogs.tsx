import React from 'react';

import './FavouriteDogs.css';

interface PropsType {
  changeFavourite (url:string):void;
  favourites: Array<string>;
};

const FavouriteDogs = ({favourites, changeFavourite} :PropsType) => {

  const showDogs = () => {
    return favourites.map(dog => {
      return (
        <div className="favourite-dog" key={dog}>
          <img 
            src={dog} 
            className='favourite-dog-image'
            alt="dog" />
          <button
            onClick={() => changeFavourite(dog)}
          >
            Unfavourite
          </button>
        </div>
      )
    });
  };

  return (
    <div className='FavouriteDogs'>
      {showDogs()}
    </div>
  );
};

export default FavouriteDogs;