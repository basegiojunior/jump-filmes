import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RoutesList } from './Routes.types';
import MovieDetails from 'src/pages/MovieDetails';
import MoviesList from 'src/pages/MoviesList';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutesList.MovieDetails}
          component={MovieDetails}
          options={{ title: 'MovieDetails' }}
        />
        <Stack.Screen
          name={RoutesList.MoviesList}
          component={MoviesList}
          options={{ title: 'MoviesList' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
