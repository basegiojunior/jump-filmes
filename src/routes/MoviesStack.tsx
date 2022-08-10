import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MediaDetails from 'src/pages/MediaDetails';
import MediasList from 'src/pages/MediasList';
import { RoutesList } from './Routes.types';

const Stack = createNativeStackNavigator();

export const MoviesStack = () => (
  <Stack.Navigator initialRouteName={RoutesList.MediasList}>
    <Stack.Screen
      name={RoutesList.MediasList}
      component={MediasList}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={RoutesList.MediaDetails}
      component={MediaDetails}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
