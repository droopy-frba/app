import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const LayoutWrapper = styled(LinearGradient)`
  width: 100%;
  height: ${Dimensions.get('window').height}px
  padding: 20px;
  position: relative;
`;

export const CurveBackgroundWrapper = styled.View`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: ${Dimensions.get('window').height / 2 - 30}px
  justify-content: center;
  align-items: center;
`;
