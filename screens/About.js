import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text>About </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default About;