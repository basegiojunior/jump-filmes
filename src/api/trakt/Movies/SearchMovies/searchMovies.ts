import { axiosTraktClient } from 'src/api/trakt/axios';
import { SearchTraktMoviesProps, TraktMedia } from './searchMovies.types';

export async function searchTraktMovies({
  query,
  page = 1,
  limit = 10,
}: SearchTraktMoviesProps): Promise<Array<TraktMedia>> {
  try {
    const response = await axiosTraktClient.get<Array<TraktMedia>>(
      'search/movie',
      {
        params: {
          query,
          page,
          limit,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(`Searching Trakt movies: ${error}`);
  }
}
