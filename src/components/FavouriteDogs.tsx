import React from 'react';

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
          <button onClick={() => changeFavourite(dog)}>
            Unfavourite
          </button>
        </div>
      )
    });
  };

  return (
    <div className='favourite-dogs'>
      {favourites.length > 0 ? 
      <h1>Your Favourite Dogs</h1>
      : null
      }
      <div className='favourite-dogs-list'>
        {showDogs()}
      </div>
    </div>
  );
};

export default FavouriteDogs;