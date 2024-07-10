import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTmdbMovieById } from 'src/api/tmdb/Movies/getMovieById/getMovieById';
import { IMAGE_BASE_URL } from 'src/api/tmdb/urls';
import { searchTraktMovies } from 'src/api/trakt/Movies/SearchMovies/searchMovies';
import { Media } from 'src/types/media';

import {
  ActionMovies,
  GetImagesProps,
  GetImagesReturn,
  SearchMoviesProps,
  SearchMoviesReturn,
} from './Movies.types';

export const searchMovies = createAsyncThunk<
  SearchMoviesReturn,
  SearchMoviesProps
>(ActionMovies.SEARCH, async ({ query, page }) => {
  const responseMedias = (await searchTraktMovies({
    query,
    page,
  })) as Media[];

  return responseMedias;
});

export const getMovieImage = createAsyncThunk<GetImagesReturn, GetImagesProps>(
  ActionMovies.GET_IMAGES,
  async function ({ tmdbId }) {
    const { poster_path, backdrop_path } = await getTmdbMovieById({
      id: tmdbId,
    });

    return {
      tmdbId,
      posterLink: IMAGE_BASE_URL + poster_path,
      backdropLink: IMAGE_BASE_URL + backdrop_path,
    };
  },
);
