import axios from 'axios';

export const getMoviesData = () => async (dispatch) => {
  return await new Promise((resolve, reject) => {
    axios
      .get('http://localhost:3000/movies')
      .then((response) => {
        let result = response?.data?.sort((a, b) => {
          var keyA = new Date(a.date),
            keyB = new Date(b.date);
          return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
        });
        console.log('Sorted -> ', result);
        return resolve(response.data);
      })
      .catch((error) => {
        alert('Please Check the Data server');
        return reject(error);
      });
  });
};
