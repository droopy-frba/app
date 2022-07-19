import React from 'react';

import ConsumerPerson from '@/assets/images/register/consumer-person.svg';
import FilmakerPerson from '@/assets/images/register/filmaker-person.svg';
import Box from '@/components/Box';
import RegisterFlowLayout from '@/components/Layout/RegisterFlowLayout';
import LayoutTitle from '@/components/Layout/RegisterFlowLayout/components/LayoutTitle';
import { useNavigation } from '@react-navigation/native';

import { BoxWrapper, PersonWrapper, UserType } from './styles';
import { ISignupUserTypeProps } from './types';

const SignupUserType = (props: ISignupUserTypeProps) => {
  const navigation = useNavigation();

  return (
    <RegisterFlowLayout>
      <>
        <LayoutTitle title="Para empezar..." subtitle="¿Cuál será tu rol en Droopy?" />
        <BoxWrapper onPress={() => navigation.navigate('Signup - User Data')}>
          <Box>
            <>
              <UserType>Camarógrafo</UserType>
              <PersonWrapper>
                <FilmakerPerson />
              </PersonWrapper>
            </>
          </Box>
        </BoxWrapper>
        <BoxWrapper>
          <Box>
            <>
              <UserType>Periodista</UserType>
              <PersonWrapper>
                <ConsumerPerson />
              </PersonWrapper>
            </>
          </Box>
        </BoxWrapper>
      </>
    </RegisterFlowLayout>
  );
};

export default SignupUserType;
