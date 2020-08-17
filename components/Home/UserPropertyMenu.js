import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const UserPropertyMenu = ({ navigation }) => {
  // Navigation Function
  const addPropertyNavigation = () => {
    navigation.navigate("NewProperty");
  };

  // JSX
  return (
    <View style={styles.inlineContainer}>
      <TouchableOpacity style={styles.button} onPress={addPropertyNavigation}>
        <Image
          source={require("../../assets/addProperty.png")}
          style={styles.buttonImageBackground}
        />
        <Text style={styles.button_white_font}>Add Property</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={addPropertyNavigation}>
        <Image
          source={require("../../assets/manage-rooms.png")}
          style={styles.buttonImageBackground}
        />
        <Text style={styles.button_white_font}>Manage Rooms</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserPropertyMenu;

const windowWidth = Dimensions.get("window").width - 20;

const styles = StyleSheet.create({
  inlineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 18,
    width: windowWidth / 2,
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
  buttonImageBackground: {
    position: "absolute",
    top: "40%",
    opacity: 0.2,
    width: 40,
    height: 40,
    alignSelf: "flex-start",
  },
});
