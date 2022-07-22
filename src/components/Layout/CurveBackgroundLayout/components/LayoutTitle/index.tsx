import React from 'react';

import { LayoutTitleWrapper, Subtitle, Title } from './styles';
import { ILayoutTitleProps } from './types';

const LayoutTitle = (props: ILayoutTitleProps) => {
  return (
    <LayoutTitleWrapper>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </LayoutTitleWrapper>
  );
};

export default LayoutTitle;
