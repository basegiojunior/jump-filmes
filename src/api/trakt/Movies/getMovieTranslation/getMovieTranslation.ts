import { axiosTraktClient } from 'src/api/trakt/axios';
import { TRAKT_URLS } from '../../urls';
import {
  GetMovieTranslationProps,
  TraktMovieTranslation,
} from './getMovieTranslation.types';

export async function getMovieTranslation({
  id,
  language,
}: GetMovieTranslationProps): Promise<Array<TraktMovieTranslation>> {
  try {
    const response = await axiosTraktClient.get<Array<TraktMovieTranslation>>(
      TRAKT_URLS.GET_MOVIE_TRANSLATION(id, language || 'pt'),
    );
    return response.data;
  } catch (error) {
    throw new Error(`Get Trakt movie translations: ${error}`);
  }
}
