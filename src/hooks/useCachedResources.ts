import * as SplashScreen from 'expo-splash-screen';
import {
  useEffect,
  useState,
} from 'react';

import {
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/open-sans';

export default function useCachedResources() {
  const [
    isLoadingComplete,
    setLoadingComplete,
  ] =
    useState(
      false,
    );
  let [
    fontsLoaded,
  ] =
    useFonts(
      {
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_600SemiBold,
        OpenSans_700Bold,
        OpenSans_800ExtraBold,
      },
    );

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(
          e,
        );
      } finally {
        setLoadingComplete(
          true,
        );
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return (
    isLoadingComplete &&
    fontsLoaded
  );
}
