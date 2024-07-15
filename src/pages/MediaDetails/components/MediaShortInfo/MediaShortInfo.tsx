import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import Typography from 'src/components/Typography';
import { colors } from 'src/styles/colors';

import { styles } from './MediaShortInfo.styles';
import { MediaShortInfoProps } from './MediaShortInfo.types';

const MediaShortInfo: React.FC<MediaShortInfoProps> = props => {
  return (
    <>
      {props.isLoading ? (
        <ActivityIndicator size="large" color={colors.onBackground} />
      ) : (
        <>
          <Typography variant="h1">{props.movie?.title}</Typography>
          <View style={styles.row}>
            <Typography variant="label">{props.labelInfo}</Typography>
          </View>
        </>
      )}
    </>
  );
};

export default MediaShortInfo;
