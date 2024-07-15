import { getMovieTranslation } from 'src/api/trakt/Movies/getMovieTranslation/getMovieTranslation';
import { Movie } from 'src/types/movie';

import { convertMinutesToHoursAndMinutes } from './date';

export function generateLabelInfoText(movie: Movie): string {
  const labelInfoArray = [];

  if (movie?.year) {
    labelInfoArray.push(movie.year);
  }
  if (movie?.runtime) {
    labelInfoArray.push(convertMinutesToHoursAndMinutes(movie?.runtime));
  }
  if (movie?.certification) {
    labelInfoArray.push(movie.certification);
  }

  const labelInfo = labelInfoArray.join('     ');

  return labelInfo;
}

export async function getMovieTranslationFromApi(movie: Movie) {
  if (movie?.ids?.trakt && movie.available_translations?.includes('pt')) {
    const response = await getMovieTranslation({
      id: movie.ids.trakt,
      language: 'pt',
    });

    return response;
  }
}
