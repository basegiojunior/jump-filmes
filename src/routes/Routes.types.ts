import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RoutesList {
  MediasList = 'MediasList',
  MovieDetails = 'MovieDetails',
}

export type MainParamList = {
  [RoutesList.MediasList]: undefined;
  [RoutesList.MovieDetails]: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainParamList>;
