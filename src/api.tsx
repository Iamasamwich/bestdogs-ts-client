const host = 'http://localhost:8080'
const options = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getNewDog = async () => {
  return await fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(res => {
    if (res.status === 'success') {
      return res.message;
    } else {
      throw res
    };
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
};

export const getDogs = async () => {
  return await fetch(host + '/getdogs', {...options, method: 'GET'})
  .then(res => res.json())
  .then(res => res.list)
  .catch(err => {throw (err)}
  );
};

export const addDog = async (url :string) => {
  const body = JSON.stringify({dog: url});
  return await fetch(host + '/addDog', {...options, method: 'POST', body})
  .then(res => res.json())
  .catch(err => {
    console.log('error adding dog');
  });
};

export const removeDog = async (url :string) => {
  const body = JSON.stringify({dog: url});
  return await fetch(host + '/removedog', {...options, method: 'PUT', body})
  .then(res => res.json())
  .catch(err => {
    console.log('error removing dog');
  });
};

