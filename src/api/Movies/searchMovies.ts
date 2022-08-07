import { MediaEnum } from 'src/types/media';
import { axiosClient } from '../axios';

type SearchMoviesProps = {
  query: string;
};

export async function searchMovies({ query }: SearchMoviesProps) {
  try {
    const response = await axiosClient.get('search', {
      params: {
        query,
        type: MediaEnum.MOVIE,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error searching movies: ${searchMovies}`);
  }
}
