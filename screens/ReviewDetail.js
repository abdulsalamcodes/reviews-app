import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../shared/Card";
import { globalStyles } from "../styles/globalStyles";

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={globalStyles.title}>{navigation.getParam("title")}</Text>
        <Text style={globalStyles.text}>{navigation.getParam("body")}</Text>
        <Text style={globalStyles.text}>{navigation.getParam("rating")}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export default ReviewDetails;
