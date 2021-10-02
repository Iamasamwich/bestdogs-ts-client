import React, { useEffect, useState } from 'react';
import {getNewDog} from '../api';

import './ShowDogs.css';

interface PropsType {
  changeFavourite (url: string):void,
  favourites: Array<string>;
}

const ShowDogs = ({changeFavourite, favourites} : PropsType) => {

  const [imgSrc, setImgSrc] = useState <string | undefined> ();
  const [dogsList, setDogsList] = useState <Array<string | undefined>> ([]);
  const [loading, setLoading] = useState <string | undefined> ();

  useEffect(() => {
    if (dogsList.length === 0) {
      getNextDog();
    };
  }, []);

  useEffect(() => {
    setImgSrc(dogsList[dogsList.length -1])
  }, [dogsList]);

  const getNextDog = () => {
    if (loading !== 'loading') {
      setLoading('loading');
      getNewDog()
      .then(res => {
        setLoading('');
        setDogsList([...dogsList, res].splice(-10));
      })
      .catch(() => {
        console.log('error fetching dog');
      });
    } else {
      return;
    };
  };

  const showPreviousDog = () => {
    if (dogsList.length > 1) {
      const newDogsList = dogsList.slice(0, dogsList.length -1);
      setDogsList(newDogsList);
    } else {
      return;
    };
  };

  const showImage = () => {
    switch (loading) {
      case 'loading':
        return (
          <div className='dog-image'>
            <div className="loading-spinner">
            </div>
            <p>Loading</p>
          </div>
        )
      default:
        return <img className='dog-image' src={imgSrc} alt="Dog" />;

    };
  };

  const favouriteButton = () => {
    return (
      <button 
        onClick={() => (imgSrc && !loading) ? changeFavourite(imgSrc) : false }
        className={`favourite-button ${loading ? 'unclickable' : ''}`}>
          {loading 
            ? 'Loading...'
            : `${(imgSrc && favourites.indexOf(imgSrc)) === -1 ? 'F' : 'Unf'}avourite`
          }
      </button>
    );
  };

  return (
    <div className='ShowDogs centered'>
      <div className='showdogs-container'>
        <button 
          className={dogsList.length > 1 ? '' : 'unclickable'}
          onClick={showPreviousDog}>
          Previous
        </button>
        <div className='center'>
          {showImage()}
          {favouriteButton()}
        </div>
        <button 
          className={loading ? 'unclickable' : '' }
          onClick={getNextDog}>
            {loading ? 'loading...' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default ShowDogs;