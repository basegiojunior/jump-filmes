import axios from 'axios';
import { TRAKT_CLIENT_ID } from 'react-native-dotenv';

export const axiosTraktClient = axios.create({
  baseURL: 'https://api.trakt.tv/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': 2,
    'trakt-api-key': TRAKT_CLIENT_ID,
  },
});
