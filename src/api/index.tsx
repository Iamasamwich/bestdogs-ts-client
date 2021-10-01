export const getDogsfromDB = async () => {
  await fetch('http://localhost:8080/getdogs', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(console.log)
}


export const addDogtoDB = async (url: string) => {
  await fetch(`http://localhost:8080/adddog`, 
  {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(url)
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });
};


// export const removeDogfromDB = async (url: string) => {
//   await fetch(`http://localhost:8080/removedog`, {
//     method: 'POST',
//     body: {
//       dog: url
//     }
//   })
//   .then(res => res.json())
//   .then(res => {
//     console.log(res);
//   })
// }