import { axiosTraktClient } from 'src/api/trakt/axios';
import { MediaEnum } from 'src/types/media';
import { SearchTraktMoviesProps, TraktMedia } from './searchMovies.types';

export async function searchTraktMovies({
  query,
}: SearchTraktMoviesProps): Promise<Array<TraktMedia>> {
  try {
    const response = await axiosTraktClient.get<Array<TraktMedia>>('search', {
      params: {
        query,
        type: MediaEnum.MOVIE,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error searching Trakt movies: ${error}`);
  }
}
