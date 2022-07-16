import React from 'react';

import { StyledBox } from './styles';
import { IBoxProps } from './types';

const Box = (props: IBoxProps) => {
  return <StyledBox variant={props.variant}>{props.children}</StyledBox>;
};

export default Box;
