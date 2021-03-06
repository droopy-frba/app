import { useFormik } from 'formik';
import React from 'react';

import Box from '@/components/Box';
import Button from '@/components/Button';
import TextInput from '@/components/Inputs/TextInput';
import CurveBackgroundLayout from '@/components/Layout/CurveBackgroundLayout';
import LayoutTitle from '@/components/Layout/CurveBackgroundLayout/components/LayoutTitle';
import { ERoutes } from '@/navigation/routes';
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
      navigation.navigate(ERoutes.SignUpUserPassword);
    },
  });

  return (
    <>
      <CurveBackgroundLayout>
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
      </CurveBackgroundLayout>
      <ButtonWrapper>
        <Button title="Siguiente" onPress={userDataForm.handleSubmit} />
      </ButtonWrapper>
    </>
  );
};

export default SignUpUserData;
