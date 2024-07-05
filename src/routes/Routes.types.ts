import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Movie } from 'src/types/movie';

export enum RoutesList {
  MediasList = 'MediasList',
  MediaDetails = 'MediaDetails',
  Favorites = 'Favorites',
}

export type MainParamList = {
  [RoutesList.MediasList]: undefined;
  [RoutesList.MediaDetails]: { movie: Movie };
  [RoutesList.Favorites]: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainParamList>;

export type RootRouteProps<RouteName extends RoutesList> = RouteProp<
  MainParamList,
  RouteName
>;
