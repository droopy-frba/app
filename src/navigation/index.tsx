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
import { ERoutes } from './routes';

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
      <Stack.Screen name={ERoutes.Login} component={LoginContainer} />
      <Stack.Screen name={ERoutes.SignUpTypeOfUser} component={SignupUserTypeContainer} />
      <Stack.Screen name={ERoutes.SignUpUserData} component={SignupUserDataContainer} />
      <Stack.Screen name={ERoutes.SignUpUserPassword} component={SignupUserPasswordContainer} />
      <Stack.Screen name={ERoutes.SignupUserPhoto} component={SignupUserPhotoContainer} />
      <Stack.Screen name={ERoutes.SignupUserPhotoTaken} component={SignupUserPhotoTakenContainer} />
      <Stack.Screen name={ERoutes.VerificationCode} component={VerificationCodeContainer} />
    </Stack.Navigator>
  );
}
