import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RoutesList } from './Routes.types';
import MovieDetails from 'src/pages/MovieDetails';
import MediasList from 'src/pages/MediasList';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RoutesList.MovieDetails}>
        <Stack.Screen
          name={RoutesList.MediasList}
          component={MediasList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesList.MovieDetails}
          component={MovieDetails}
          options={{ title: 'MovieDetails' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
