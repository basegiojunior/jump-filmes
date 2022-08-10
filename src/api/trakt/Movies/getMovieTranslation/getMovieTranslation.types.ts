export type GetMovieTranslationProps = {
  id: number;
  language?: string;
};

export type TraktMovieTranslation = {
  title: string;
  overview?: string | null;
  tagline?: string | null;
};
