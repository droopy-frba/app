import React from 'react';

import { StyledTextInput, StyledTextInputWrapper } from './styles';
import { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps) => {
  return (
    <StyledTextInputWrapper>
      <StyledTextInput
        onChange={props.onChange}
        placeholder={props.placeholder}
        keyboardType={props.type}
      />
    </StyledTextInputWrapper>
  );
};

export default TextInput;
