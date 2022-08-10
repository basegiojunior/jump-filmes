import { axiosTraktClient } from 'src/api/trakt/axios';
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
      `movies/${id}/translations/${language}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Get Trakt movie translations: ${error}`);
  }
}
