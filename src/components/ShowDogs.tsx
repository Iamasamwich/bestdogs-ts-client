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
      fetchDog();
    };
  }, []);

  useEffect(() => {
    setImgSrc(dogsList[dogsList.length -1])
  }, [dogsList]);

  const fetchDog = () => {
    setLoading('loading');
    getNewDog()
    .then((res : string) => {
      setDogsList([...dogsList, res].slice(-10))
    })
    .catch(() => {
      console.log('error fetching dog');
    });
  };

  const getNextDog = () => {
    if (loading !== 'loading') {
      fetchDog();
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

  const renderImage = () => {
    switch (imgSrc) {
      case 'error':
        return;
      case undefined:
        return <div className='dog-image'>Loading...</div>
      default:
        return <img onLoad={() => setLoading(undefined)} className='dog-image' src={imgSrc} alt="Dog" />;
    };
  };

  const favouriteButton = () => {
    return (
      <button 
        onClick={() => (imgSrc && !loading) ? changeFavourite(imgSrc) : false }
        className={`favourite-button ${loading ? 'unclickable' : ''}`}>
        {`${(imgSrc && favourites.indexOf(imgSrc)) === -1 ? 'F' : 'Unf'}avourite`}
      </button>
    );
  }

  return (
    <div className='ShowDogs centered'>
      <div className='showdogs-container'>
        <button 
          className={dogsList.length > 1 ? '' : 'unclickable'}
          onClick={showPreviousDog}>
          Previous
        </button>
        <div className='center'>
          {renderImage()}
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