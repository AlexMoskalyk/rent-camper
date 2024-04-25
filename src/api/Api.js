import axios from 'axios';

const BASE_URL = 'https://661bdbbe65444945d0506e50.mockapi.io/cars';

export const fetchAllCars = async (page = 1, limit = 4) => {
  const url = new URL(BASE_URL);
  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);

  const response = await axios.get(url.toString(), {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};
