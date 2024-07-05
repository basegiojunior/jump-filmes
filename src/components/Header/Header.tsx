import React from 'react';
import { View } from 'react-native';

import Typography from 'src/components//Typography';
import IconButton from 'src/components/IconButton';

import { stylesCreator } from './Header.style';
import { HeaderProps } from './Header.types';

const Header = (props: HeaderProps) => {
  const styles = stylesCreator({ isTransparent: props.isTransparent });

  return (
    <View style={styles.container}>
      {props.iconLeft && (
        <IconButton onPress={props.onPressLeft} iconName={props.iconLeft} />
      )}

      <View style={styles.centerContainer}>
        {props.headertitle ? (
          <Typography variant="h4">{props.headertitle}</Typography>
        ) : (
          props.headerCenter
        )}
      </View>

      {props.iconRight && (
        <IconButton onPress={props.onPressRight} iconName={props.iconRight} />
      )}
    </View>
  );
};

export const HeaderMemo = React.memo(Header);
