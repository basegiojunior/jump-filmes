import axios from 'axios';

import { TMDB_BASE_URL } from './urls';

export const axiosTmdbClient = axios.create({
  baseURL: TMDB_BASE_URL,
  timeout: 5000,
});
