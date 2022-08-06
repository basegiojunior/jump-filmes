import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RoutesList {
  MoviesList = 'MoviesList',
  MovieDetails = 'MovieDetails',
}

export type MainParamList = {
  [RoutesList.MoviesList]: undefined;
  [RoutesList.MovieDetails]: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainParamList>;
