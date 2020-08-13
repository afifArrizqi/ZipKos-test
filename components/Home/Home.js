import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PropertyList from "./PropertyList";
import UserProfileBar from "./UserProfileBar";
import UserPropertyMenu from "./UserPropertyMenu";
import MyAppText from "../MyAppText";

const Home = ({ navigation }) => {
  // JSX
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UserProfileBar />
      <UserPropertyMenu navigation={navigation} />
      <MyAppText style={styles.propertyListHeader}>My Property</MyAppText>
      <PropertyList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  propertyListHeader: {
    fontWeight: "700",
    fontSize: 20,
  },
});
