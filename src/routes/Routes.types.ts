import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RoutesList {
  MediasList = 'MediasList',
  MediaDetails = 'MediaDetails',
}

export type MainParamList = {
  [RoutesList.MediasList]: undefined;
  [RoutesList.MediaDetails]: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainParamList>;
