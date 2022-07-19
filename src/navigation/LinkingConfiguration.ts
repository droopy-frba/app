/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import * as Linking from 'expo-linking';
import { RootStackParamList } from 'types';

import { LinkingOptions } from '@react-navigation/native';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: 'Login',
      ['Signup - Type of User']: 'Signup - Type of User',
      ['Signup - User Data']: 'Signup - User Data',
      ['Signup - User Password']: 'Signup - User Password',
    },
  },
};

export default linking;
