import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { MainNavigationProps, RoutesList } from 'src/routes/Routes.types';
import styles from './MediaDetails.style';

export const MediaDetails: React.FC = () => {
  const { navigate } = useNavigation<MainNavigationProps>();
  return (
    <View style={styles.container}>
      <Text>MediaDetails</Text>
      <Button title="list" onPress={() => navigate(RoutesList.MediasList)} />
    </View>
  );
};
