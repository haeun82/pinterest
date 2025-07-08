import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
  console.log(ACCESS_KEY);

export const fetchImages = async ({ query = '', page = 1, perPage = 12 }) => {
  const endpoint = query
    ? 'https://api.unsplash.com/search/photos'
    : 'https://api.unsplash.com/photos';
  const config = {
    params: {
      client_id: ACCESS_KEY,
      page,
      per_page: perPage,
      ...(query && { query }),
    },
    headers: {
      'Accept-Version': 'v1', 
    }
  };
  const res = await axios.get(endpoint, config);
  return query ? res.data.results : res.data;
  
  
};
