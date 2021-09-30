import React, { useEffect, useState } from 'react';

import './ShowDogs.css';

interface DogsList {
  url: string,
  favourite: Boolean
}

const ShowDogs = () => {

  const [imgSrc, setImgSrc] = useState <string | undefined> ();
  const [dogsList, setDogsList] = useState <Array<string | undefined>> ([]);

  useEffect(() => {
    getDog();
  }, []);

  useEffect(() => {
    if (imgSrc === undefined) {
      return;
    } else {
      setDogsList([...dogsList, imgSrc].slice(-10));
    };
  }, [imgSrc]);

  useEffect(() => {

  }, [dogsList])

  const getDog = async () => {
    setImgSrc(undefined);
    await fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(res => {
      if (res.status === 'success') {
        setImgSrc(res.message);
      } else {
        setImgSrc('error');
      }
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      setImgSrc('error');
    });
  };

  const renderImage = () => {
    switch (imgSrc) {
      case 'error':
        return;
      case null:
        return <div className='dog-image'>Loading...</div>
      default:
        console.log(imgSrc);
        
        console.log('showing image');
        
        return <img className='dog-image' src={imgSrc} alt="Dog" />;
    };
  };

  console.log(dogsList);
  

  return (
    <div className='ShowDogs centered'>
      <div className='showdogs-container'>
        <button>Previous</button>
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