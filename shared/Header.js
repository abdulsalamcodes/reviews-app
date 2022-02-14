import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { Dimensions } from 'react-native';

const Header = ({ title, navigation }) => {
    const openMenu = () => {
        navigation.openDrawer();
    }
  return (
    <ImageBackground source={require('../assets/game_bg.jpeg')} style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: "100%",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
export default Header;
