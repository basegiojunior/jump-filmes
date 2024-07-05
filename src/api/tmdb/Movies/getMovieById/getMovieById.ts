import { TMDB_3_API_KEY } from 'react-native-dotenv';

import { axiosTmdbClient } from 'src/api/tmdb/axios';

import { GetTmdbMovieByIdProps, TmdbMovieType } from './getMovieById.types';
import { TMDB_URLS } from '../../urls';

export async function getTmdbMovieById({
  id,
}: GetTmdbMovieByIdProps): Promise<TmdbMovieType> {
  try {
    const response = await axiosTmdbClient.get(TMDB_URLS.GET_MOVIE_BY_ID(id), {
      params: {
        api_key: TMDB_3_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`get TMDB movie: ${error}`);
  }
}
