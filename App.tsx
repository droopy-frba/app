import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getStatusBarHeight } from 'react-native-status-bar-height';
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
            <FlashMessage position="top" duration={3000} statusBarHeight={getStatusBarHeight()} />
          </SafeAreaProvider>
        </ThemeProvider>
      </ReduxProvider>
    );
  }
};
