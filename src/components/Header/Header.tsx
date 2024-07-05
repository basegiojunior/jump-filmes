import React from 'react';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { HeaderProps } from './Header.types';
import { stylesCreator } from './Header.style';
import { View } from 'react-native';

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
