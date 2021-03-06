/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Login: NavigatorScreenParams<RootTabParamList> | undefined;
  ['Signup - Type of User']: NavigatorScreenParams<RootTabParamList> | undefined;
  ['Signup - User Data']: NavigatorScreenParams<RootTabParamList> | undefined;
  ['Signup - User Password']: NavigatorScreenParams<RootTabParamList> | undefined;
  ['Signup - User Photo']: NavigatorScreenParams<RootTabParamList> | undefined;
  ['Signup - User Photo Taken']: NavigatorScreenParams<RootTabParamList> | undefined;
  ['Verification Code']: NavigatorScreenParams<RootTabParamList> | undefined;
  ['Subscription Plans']: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
