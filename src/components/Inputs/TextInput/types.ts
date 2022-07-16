import { KeyboardType, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface ITextInputProps {
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  icon: any;
  value: string;
  placeholder: string;
  type: KeyboardType;
}
