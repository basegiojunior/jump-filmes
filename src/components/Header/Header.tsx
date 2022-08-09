import React from 'react';
import { HeaderProps } from './Header.types';
import * as S from './Header.style';
import IconButton from '../IconButton';
import Typography from '../Typography';

const Header = (props: HeaderProps) => {
  const handleShowCenter = () => {
    if (props.headertitle) {
      return <Typography variant="h2">{props.headertitle}</Typography>;
    }
    if (props.headerCenter) {
      return props.headerCenter;
    }
  };

  return (
    <S.Container>
      {props.iconLeft && (
        <IconButton onPress={props.onPressLeft} iconName={props.iconLeft} />
      )}

      <S.CenterContainer>{handleShowCenter()}</S.CenterContainer>

      {props.iconRight && (
        <IconButton onPress={props.onPressRight} iconName={props.iconRight} />
      )}
    </S.Container>
  );
};

export const HeaderMemo = React.memo(Header);
