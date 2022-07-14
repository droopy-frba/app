import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';


import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import lightTheme from '@assets/theme/light';

export default () => {
  const isLoadingComplete =
    useCachedResources();
  if (
    !isLoadingComplete
  ) {
    // @todo add splash screen
    return null;
  } else {
    return (
      <ThemeProvider
        theme={
          lightTheme
        }
      >
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
};
