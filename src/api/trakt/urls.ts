export const TRAKT_BASE_URL = 'https://api.trakt.tv/';

export const TRAKT_URLS = {
  GET_MOVIE_TRANSLATION: (id: number, language: string) =>
    `movies/${id}/translations/${language}`,
  SEARCH_MOVIE: 'search/movie',
};
