import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserProfileBar = () => {
  // JSX
  return (
    <View style={styles.mainBar}>
      <Text>ZipBalance</Text>
      <Text>Rp. 12.300</Text>
    </View>
  );
};

export default UserProfileBar;

const styles = StyleSheet.create({
  mainBar: {
    backgroundColor: "#fff",
    textAlign: "left",
  },
});
