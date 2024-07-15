import React from 'react';
import { View } from 'react-native';

import { getYoutubeThumbnailUrl } from 'src/api/youtube/urls';
import Typography from 'src/components/Typography';
import YoutubeLink from 'src/components/YoutubeLink';

import { styles } from './MovieTrailer.styles';
import { MovieTrailerProps } from './MovieTrailer.types';

const MovieTrailer: React.FC<MovieTrailerProps> = props => {
  return (
    <>
      {props.movie?.trailer && (
        <>
          <View style={styles.labelContainer}>
            <Typography variant="label">TRAILER</Typography>
          </View>
          <YoutubeLink
            youtubeLink={props.movie.trailer}
            thumbnailUri={getYoutubeThumbnailUrl(props.movie.trailer)}
          />
        </>
      )}
    </>
  );
};

export default MovieTrailer;
