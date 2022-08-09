import { axiosTraktClient } from 'src/api/trakt/axios';
import { SearchTraktMoviesProps, TraktMedia } from './searchMovies.types';

export async function searchTraktMovies({
  query,
}: SearchTraktMoviesProps): Promise<Array<TraktMedia>> {
  try {
    const response = await axiosTraktClient.get<Array<TraktMedia>>(
      'search/movie',
      {
        params: {
          query,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error(`Searching Trakt movies: ${error}`);
  }
}
