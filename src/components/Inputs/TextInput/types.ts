import { KeyboardType, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

export interface ITextInputProps {
  onChange: (value: string) => void;
  icon: any;
  value?: string;
  placeholder: string;
  type?: KeyboardType;
  password?: boolean;
}
