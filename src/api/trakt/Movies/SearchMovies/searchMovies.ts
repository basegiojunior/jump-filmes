import { axiosTraktClient } from 'src/api/trakt/axios';

import { SearchTraktMoviesProps, TraktMedia } from './searchMovies.types';
import { TRAKT_URLS } from '../../urls';

export async function searchTraktMovies({
  query,
  page = 1,
  limit = 10,
}: SearchTraktMoviesProps): Promise<Array<TraktMedia>> {
  const response = await axiosTraktClient.get<Array<TraktMedia>>(
    TRAKT_URLS.SEARCH_MOVIE,
    {
      params: {
        query,
        page,
        limit,
        extended: 'full',
      },
    },
  );
  return response.data;
}
