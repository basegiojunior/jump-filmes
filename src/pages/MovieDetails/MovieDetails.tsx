import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { MainNavigationProps, RoutesList } from 'src/routes/Routes.types';
import styles from './MovieDetails.style';

export const MovieDetails: React.FC = () => {
  const { navigate } = useNavigation<MainNavigationProps>();
  return (
    <View style={styles.container}>
      <Text>MovieDetails</Text>
      <Button title="list" onPress={() => navigate(RoutesList.MediasList)} />
    </View>
  );
};
