import axios from 'axios';
import { TRAKT_CLIENT_ID } from 'react-native-dotenv';

import { TRAKT_BASE_URL } from './urls';

export const axiosTraktClient = axios.create({
  baseURL: TRAKT_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': 2,
    'trakt-api-key': TRAKT_CLIENT_ID,
  },
});
