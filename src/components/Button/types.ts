export interface IButtonProps {
  inverted?: boolean;
  title: string;
  isLoading?: boolean;
  onPress: () => void;
}

export interface IStyledButtonProps {
  inverted: boolean;
}
