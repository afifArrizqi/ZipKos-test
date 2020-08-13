import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MyAppText from "../MyAppText";

const UserPropertyMenu = ({ navigation }) => {
  // Navigation Function
  const addPropertyNavigation = () => {
    navigation.navigate("NewProperty");
  };

  // JSX
  return (
    <View style={styles.inlineContainer}>
      <TouchableOpacity style={styles.button} onPress={addPropertyNavigation}>
        <MyAppText style={styles.button_white_font}>Add Property</MyAppText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addPropertyNavigation}>
        <MyAppText style={styles.button_white_font}>Manage Rooms</MyAppText>
      </TouchableOpacity>
    </View>
  );
};

export default UserPropertyMenu;

const styles = StyleSheet.create({
  inlineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderStyle: "solid",
    borderColor: "#333",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  button_white_font: {
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#00b6b9",
  },
});
