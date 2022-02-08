import React from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Navigator from './routes/drawer';

export default props => {
  let [fontsLoaded] = useFonts({
    'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Navigator />
  );
};