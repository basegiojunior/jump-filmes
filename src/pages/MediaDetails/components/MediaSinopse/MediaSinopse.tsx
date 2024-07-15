import React from 'react';
import { ActivityIndicator, Pressable } from 'react-native';

import Typography from 'src/components/Typography';
import { colors } from 'src/styles/colors';

import { styles } from './MediaSinopse.styles';
import { MediaSinopseProps } from './MediaSinopse.types';

const MediaSinopse: React.FC<MediaSinopseProps> = props => {
  const [readMoreExpanded, setReadMoreExpanded] = React.useState(false);

  return (
    <>
      {props.isLoading ? (
        <ActivityIndicator size="large" color={colors.onBackground} />
      ) : (
        <>
          <Typography
            numberOfLines={readMoreExpanded ? undefined : 3}
            ellipsizeMode="tail"
            textAlign="justify"
            variant="text">
            {props.movie?.overview}
          </Typography>
          <Pressable
            style={styles.readMorePressable}
            onPress={() => setReadMoreExpanded(!readMoreExpanded)}>
            <Typography color={colors.primaryVariant} bold>
              {readMoreExpanded ? 'Ver menos' : 'Ver mais'}
            </Typography>
          </Pressable>
        </>
      )}
    </>
  );
};

export default MediaSinopse;
