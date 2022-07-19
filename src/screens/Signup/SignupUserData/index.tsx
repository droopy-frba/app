import { useFormik } from 'formik';
import React from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import TextInput from '@/components/Inputs/TextInput';
import RegisterFlowLayout from '@/components/Layout/RegisterFlowLayout';
import LayoutTitle from '@/components/Layout/RegisterFlowLayout/components/LayoutTitle';
import { useNavigation } from '@react-navigation/native';

import { BoxWrapper, ButtonWrapper, InputWrapper } from './styles';
import { ISignupUserDataProps } from './types';

const SignUpUserData = (props: ISignupUserDataProps) => {
  const navigation = useNavigation();
  const userDataForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      sex: '',
      transmissionChannel: '',
    },
    onSubmit: () => {
      console.log('submiting: ', userDataForm.values);
      navigation.navigate('Signup - User Password');
    },
  });

  return (
    <>
      <RegisterFlowLayout>
        <>
          <LayoutTitle title="¡Genial!" subtitle="Ahora nos gustaría saber mas de vos..." />
          <BoxWrapper>
            <Box>
              <>
                <InputWrapper>
                  <TextInput
                    onChange={userDataForm.handleChange('firstName')}
                    placeholder="Nombre"
                    icon={{}}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    onChange={userDataForm.handleChange('lastName')}
                    placeholder="Apellido"
                    icon={{}}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    onChange={userDataForm.handleChange('email')}
                    placeholder="Email"
                    icon={{}}
                  />
                </InputWrapper>
                <InputWrapper>
                  {/* @todo migrate to combobox */}
                  <TextInput
                    onChange={userDataForm.handleChange('sex')}
                    placeholder="Sexo"
                    icon={{}}
                  />
                </InputWrapper>
                <InputWrapper>
                  <TextInput
                    onChange={userDataForm.handleChange('transmissionChannel')}
                    placeholder="Canal de transmisión (opcional)"
                    icon={{}}
                  />
                </InputWrapper>
              </>
            </Box>
          </BoxWrapper>
        </>
      </RegisterFlowLayout>
      <ButtonWrapper>
        <Button title="Siguiente" onPress={userDataForm.handleSubmit} />
      </ButtonWrapper>
    </>
  );
};

export default SignUpUserData;
