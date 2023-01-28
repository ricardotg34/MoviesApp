import axios from 'axios';

const movieDBBaseRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '30a90ccbb0af0350f28445768c87e2c9',
    language: 'es-MX',
  },
});

export default movieDBBaseRequest;
