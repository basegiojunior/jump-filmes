import { colors } from 'src/styles/colors';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const MainInfo = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.outline};
  padding: 20px;
`;

export const ReadMorePressable = styled.Pressable`
  margin-top: 8px;
`;

export const LabelContainer = styled.View`
  padding-bottom: 12px;
  padding-left: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
`;
