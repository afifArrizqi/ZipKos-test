import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PropertyList from "./PropertyList";
import UserProfileBar from "./UserProfileBar";
import UserPropertyMenu from "./UserPropertyMenu";

const Home = ({ navigation }) => {
  // JSX
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden />
      <UserProfileBar />
      <UserPropertyMenu navigation={navigation} />
      <Text style={styles.propertyListHeader}>My Property</Text>
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
