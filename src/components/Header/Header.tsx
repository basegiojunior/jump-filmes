import React from 'react';
import { HeaderProps } from './Header.types';
import * as S from './Header.style';
import IconButton from '../IconButton';
import Typography from '../Typography';

const Header = (props: HeaderProps) => {
  return (
    <S.Container>
      {props.iconLeft && (
        <IconButton onPress={props.onPressLeft} iconName={props.iconLeft} />
      )}

      <S.CenterContainer>
        {props.headertitle ? (
          <Typography variant="h4">{props.headertitle}</Typography>
        ) : (
          props.headerCenter
        )}
      </S.CenterContainer>

      {props.iconRight && (
        <IconButton onPress={props.onPressRight} iconName={props.iconRight} />
      )}
    </S.Container>
  );
};

export const HeaderMemo = React.memo(Header);
