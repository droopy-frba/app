import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import lightTheme from '@/assets/theme/light';
import useCachedResources from '@/hooks/useCachedResources';
import Navigation from '@/navigation';
import store from '@/redux/store';

export default () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    // @todo add splash screen
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <ThemeProvider theme={lightTheme}>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </ThemeProvider>
      </ReduxProvider>
    );
  }
};
