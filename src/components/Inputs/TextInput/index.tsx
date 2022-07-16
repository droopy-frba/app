import React from 'react';

import { StyledTextInput } from './styles';
import { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps) => {
  return (
    <StyledTextInput
      onChangeText={props.onChange}
      placeholder={props.placeholder}
      keyboardType={props.type || 'default'}
      secureTextEntry={props.password}
    />
  );
};

export default TextInput;
