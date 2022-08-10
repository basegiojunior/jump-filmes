import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RoutesList } from './Routes.types';
import MediaDetails from 'src/pages/MediaDetails';
import MediasList from 'src/pages/MediasList';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default MainRoutes;
