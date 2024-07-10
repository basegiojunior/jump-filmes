import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from 'src/styles/colors';

import { FavoritesStack } from './FavoritesStack';
import { MoviesStack } from './MoviesStack';

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
          options={tabScreenOptions('filmstrip-box-multiple')}>
          {MoviesStack}
        </Tab.Screen>
        <Tab.Screen name="Favoritos" options={tabScreenOptions('star')}>
          {FavoritesStack}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const tabScreenOptions = (iconName: string) => {
  return {
    headerShown: false,
    tabBarStyle: { backgroundColor: colors.surfaceVariant },
    tabBarShowLabel: false,
    tabBarIcon: (props: { size: number; focused: boolean }) => (
      <Icon
        size={props.size}
        color={props.focused ? colors.primary : colors.onSurface}
        name={iconName}
      />
    ),
  };
};

export default MainRoutes;
