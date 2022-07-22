import React from 'react';

import { LayoutWrapper } from './styles';
import { ISolidBackgroundLayoutProps } from './types';

const SolidBackgroundLayout = (props: ISolidBackgroundLayoutProps) => {
  return <LayoutWrapper>{props.children}</LayoutWrapper>;
};

export default SolidBackgroundLayout;
