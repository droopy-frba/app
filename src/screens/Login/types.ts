export interface ILoginProps {
  onLogin: (email: string, password: string) => void;
  isLoading: boolean;
}
