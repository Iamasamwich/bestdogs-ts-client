import React, { useEffect, useState } from 'react';

import './ShowDogs.css';

const ShowDogs = () => {

  const [imgSrc, setImgSrc] = useState('loading');
  const [dogsList, setDogsList] = useState([]);

  useEffect(() => {
    getDog();
  }, []);

  const getDog = async () => {
    setImgSrc('loading');
    await fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log('fetch happened');
      
      return res;
    })
    .then(res => res.json())
    .then(res => {
      if (res.status === 'success') {
        setImgSrc(res.message);
        // const newDogsList = dogsList.push(res.message);
        // setDogsList(newDogsList);
      } else {
        setImgSrc('error');
      }
    })
    .catch(err => {
      setImgSrc('error');
    });
  }

  const renderImage = () => {
    switch (imgSrc) {
      case 'error':
        return;
      case 'loading':
        return <div className='dog-image'>Loading...</div>
      default:
        console.log(imgSrc);
        
        console.log('showing image');
        
        return <img className='dog-image' src={imgSrc} alt="Dog" />;
    };
  };

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