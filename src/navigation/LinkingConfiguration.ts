/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from 'expo-linking';
import { RootStackParamList } from 'types';

import { LinkingOptions } from '@react-navigation/native';

import { ERoutes } from './routes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      [ERoutes.Login]: ERoutes.Login,
      [ERoutes.SignUpTypeOfUser]: ERoutes.SignUpTypeOfUser,
      [ERoutes.SignUpUserData]: ERoutes.SignUpUserData,
      [ERoutes.SignUpUserPassword]: ERoutes.SignUpUserPassword,
      [ERoutes.SignupUserPhoto]: ERoutes.SignupUserPhoto,
      [ERoutes.SignupUserPhotoTaken]: ERoutes.SignupUserPhotoTaken,
      [ERoutes.VerificationCode]: ERoutes.VerificationCode,
    },
  },
};

export default linking;
