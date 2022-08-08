import { axiosTmdbClient } from 'src/api/tmdb/axios';
import { TMDB_3_API_KEY } from 'react-native-dotenv';
import { GetTmdbMovieByIdProps, TmdbMovieType } from './getMovieById.types';

export async function getTmdbMovieById({
  id,
}: GetTmdbMovieByIdProps): Promise<TmdbMovieType> {
  try {
    const response = await axiosTmdbClient.get(`movie/${id}`, {
      params: {
        api_key: TMDB_3_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error on get IMDB movie: ${error}`);
  }
}

export async function getTmdbMoviePosterPathById({
  id,
}: GetTmdbMovieByIdProps): Promise<string | null | undefined> {
  try {
    const response = await getTmdbMovieById({ id });
    return response.poster_path;
  } catch (error) {
    throw new Error(`Error on get IMDB poster path movie: ${error}`);
  }
}
