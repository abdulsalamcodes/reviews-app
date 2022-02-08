import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About.js';
import Header from '../shared/Header.js';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="About GameZone" navigation={navigation} />,
      };
    },
  },
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#333',
    headerStyle: {backgroundColor: '#eee', height: 100}
  }
});
export default AboutStack;