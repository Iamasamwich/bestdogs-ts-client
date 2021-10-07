interface Dog {
  id: string
};


const host = 'http://localhost:8080/dogs'
const options = {
  headers: {
    'Content-Type': 'application/json',
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
  .catch(err => {console.log(err)});
};

export const getDogs = async () => {
  return await fetch(host, {...options, method: 'GET'})
  .then(res => res.json())
  .then(res => res.list.map((dog : Dog) => dog.id))
  .catch(err => {
    console.log(err);
    return [];
  });
};

export const addDog = async (url :string) => {
  const body = JSON.stringify({dog: url});
  return await fetch(host, {...options, method: 'POST', body})
  .then(res => res.json())
  .then(res => res.list.map((dog : Dog) => dog.id))
  .catch(err => {
    console.log('error adding dog');
    return [];
  });
};

export const removeDog = async (url :string) => {
  const body = JSON.stringify({dog: url});
  return await fetch(host, {...options, method: 'PUT', body})
  .then(res => res.json())
  .then(res => res.list.map((dog : Dog) => dog.id))
  .catch(err => {
    console.log('error removing dog');
    return [];
  });
};

