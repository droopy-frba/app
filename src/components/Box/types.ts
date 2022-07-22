import { ReactChild } from 'react';

type IBoxVariant = 'light' | 'dark';

export interface IBoxWrapperProps {
  variant: IBoxVariant;
}

export interface IBoxProps {
  variant?: IBoxVariant;
  children: ReactChild;
}
