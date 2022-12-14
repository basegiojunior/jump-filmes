import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from 'src/styles/colors';
import { MoviesStack } from './MoviesStack';
import { FavoritesStack } from './FavoritesStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

const Tab = createBottomTabNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Filmes"
          options={{
            headerShown: false,
            tabBarStyle: { backgroundColor: colors.surfaceVariant },
            tabBarShowLabel: false,
            tabBarIcon: props => (
              <Icon
                size={props.size}
                color={props.focused ? colors.primary : colors.onSurface}
                name="filmstrip-box-multiple"
              />
            ),
          }}>
          {MoviesStack}
        </Tab.Screen>
        <Tab.Screen
          name="Favoritos"
          options={{
            headerShown: false,
            tabBarStyle: { backgroundColor: colors.surfaceVariant },
            tabBarShowLabel: false,
            tabBarIcon: props => (
              <Icon
                size={props.size}
                color={props.focused ? colors.primary : colors.onSurface}
                name="star"
              />
            ),
          }}>
          {FavoritesStack}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
