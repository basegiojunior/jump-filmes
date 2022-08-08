import axios from 'axios';

export const axiosTmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 5000,
});
