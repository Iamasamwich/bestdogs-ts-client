import React, { useEffect, useState } from 'react';

import './ShowDogs.css';

const ShowDogs = () => {

  const [imgSrc, setImgSrc] = useState <string | undefined> ();
  const [dogsList, setDogsList] = useState <Array<string | undefined>> ([]);

  useEffect(() => {
    getDog();
  }, []);

  useEffect(() => {
    setImgSrc(dogsList[dogsList.length -1])
  }, [dogsList]);

  const getDog = async () => {
    await fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(res => {
      if (res.status === 'success') {
        setDogsList([...dogsList, res.message].slice(-10));
      };
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      setImgSrc('error');
    });
  };

  const showPreviousDog = () => {
    if (dogsList.length <= 1) {
      return;
    } else {
      const newDogsList = dogsList.slice(0, dogsList.length -1);
      setDogsList(newDogsList);
    };
  };

  const renderImage = () => {
    switch (imgSrc) {
      case 'error':
        return;
      case undefined:
        return <div className='dog-image'>Loading...</div>
      default:
        return <img className='dog-image' src={imgSrc} alt="Dog" />;
    };
  };

  return (
    <div className='ShowDogs centered'>
      <div className='showdogs-container'>
        <button onClick={() => showPreviousDog()}>Previous</button>
        <div className='center'>
          {renderImage()}
          <button className='favourite-button'>
            Favourite
          </button>
        </div>
        <button onClick={() => getDog()}>Next</button>
      </div>
    </div>
  );
};

export default ShowDogs;