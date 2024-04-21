import axios from 'axios';

export const api = () =>
  axios.create({
    baseURL: 'https://661bdbbe65444945d0506e50.mockapi.io/cars',
  });
