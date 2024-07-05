import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoritesMedias from 'src/pages/FavoritesMedias';
import MediaDetails from 'src/pages/MediaDetails';

import { RoutesList } from './Routes.types';

const Stack = createNativeStackNavigator();

export const FavoritesStack = () => (
  <Stack.Navigator initialRouteName={RoutesList.MediasList}>
    <Stack.Screen
      name={RoutesList.Favorites}
      component={FavoritesMedias}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={RoutesList.MediaDetails}
      component={MediaDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
