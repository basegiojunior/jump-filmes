import { Movie } from './movie';

export type Media = {
  type: MediaEnum.MOVIE;
  score: number;
  movie: Movie;
};

export enum MediaEnum {
  MOVIE = 'movie',
}
