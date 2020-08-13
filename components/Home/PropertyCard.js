import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MyAppText from "../MyAppText";

const PropertyCard = ({ name }) => {
  return (
    <View style={styles.propertyCard}>
      <ScrollView horizontal={true} style={styles.imageCardList}>
        <Image
          source={require("../../assets/house_1.jpg")}
          style={styles.cardImage}
        />
        <Image
          source={require("../../assets/house_2.jpg")}
          style={styles.cardImage}
        />
        <Image
          source={require("../../assets/house_1.jpg")}
          style={styles.cardImage}
        />
      </ScrollView>
      <View>
        <MyAppText style={styles.cardTitle}>{name}</MyAppText>
        <Text>⭐⭐⭐⭐⭐</Text>
        <View style={styles.inlineContainer}>
          <TouchableOpacity style={[styles.buttonCard, styles.button_white]}>
            <MyAppText style={styles.button_white_font}>
              Modify Property
            </MyAppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonCard, styles.button_light_blue]}
          >
            <MyAppText style={styles.button_light_blue_font}>
              Manage Rooms
            </MyAppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  propertyCard: {
    marginBottom: 5,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  cardImage: {
    width: 280,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cardTitle: {
    fontWeight: "700",
    textTransform: "capitalize",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  inlineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonCard: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderStyle: "solid",
    borderColor: "#333",
    borderRadius: 10,
  },
  button_white: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#00b6b9",
  },
  button_white_font: {
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: "#00b6b9",
  },
  button_light_blue: {
    backgroundColor: "#00b6b9",
    borderWidth: 1,
    borderColor: "#00b6b9",
  },
  button_light_blue_font: {
    fontWeight: "700",
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
