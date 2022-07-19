import * as React from 'react';

import LoginContainer from '@/containers/Login';
import SignupUserDataContainer from '@/containers/Signup/SignupUserData';
import SignupUserPasswordContainer from '@/containers/Signup/SignupUserPassword';
import SignupUserPhotoContainer from '@/containers/Signup/SignupUserPhoto';
import SignupUserPhotoTakenContainer from '@/containers/Signup/SignupUserPhotoTaken';
import SignupUserTypeContainer from '@/containers/Signup/SignupUserType';
import VerificationCodeContainer from '@/containers/VerificationCode';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginContainer} />
      <Stack.Screen name="Signup - Type of User" component={SignupUserTypeContainer} />
      <Stack.Screen name="Signup - User Data" component={SignupUserDataContainer} />
      <Stack.Screen name="Signup - User Password" component={SignupUserPasswordContainer} />
      <Stack.Screen name="Signup - User Photo" component={SignupUserPhotoContainer} />
      <Stack.Screen name="Signup - User Photo Taken" component={SignupUserPhotoTakenContainer} />
      <Stack.Screen name="Verification Code" component={VerificationCodeContainer} />
    </Stack.Navigator>
  );
}
