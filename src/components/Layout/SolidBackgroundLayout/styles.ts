import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const LayoutWrapper = styled.View`
width: 100%;
height: ${Dimensions.get('window').height}px
padding: 20px;
position: relative;
background-color: ${(props) => props.theme.COLORS.PRINCIPAL_300};
`;
