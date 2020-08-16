import {
  faBed,
  faCoins,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const PropertyCard = ({ name, images }) => {
  return (
    <View style={styles.propertyCard}>
      {/** Image Gallery SECTION */}
      <ScrollView horizontal={true} style={styles.imageCardList}>
        {images.length ? (
          images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: "data:image/jpeg;base64," + image }}
              style={styles.cardImage}
            />
          ))
        ) : (
          <Image
            source={require("../../assets/defaultImage.jpg")}
            style={styles.cardImage}
          />
        )}
      </ScrollView>

      {/** CARD BODY */}
      <View>
        <Text style={[styles.cardTitle, styles.m3]}>{name}</Text>
        <View style={styles.inlineContainer}>
          <Text style={styles.m3}>⭐⭐⭐⭐⭐</Text>
          <Text style={[styles.m3, styles.gray, styles.small]}>(178)</Text>
        </View>

        {/*  This is Cardbody ---SECTION--- MONEY RECIVED MONEY WAITING */}
        <View style={styles.inlineContainer}>
          <FontAwesomeIcon icon={faCoins} style={styles.m3} />
          <Text style={[styles.m3, styles.bold, styles.primaryColor]}>
            Rp. {Math.ceil(Math.random() * 9)}.000.000
          </Text>
          <Text style={[styles.m3, styles.gray, styles.small]}>recived</Text>
          <Text>|</Text>
          <Text style={[styles.m3, styles.red, styles.bold]}>
            Rp. {Math.ceil(Math.random() * 9)}.000
          </Text>
          <Text style={[styles.m3, styles.gray, styles.small]}>waiting</Text>
        </View>

        {/*  This is Cardbody ---SECTION--- BILLING */}
        <View style={styles.inlineContainer}>
          <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.m3} />
          <Text style={[styles.m3, styles.bold, styles.primaryColor]}>0</Text>
          <Text style={[styles.m3, styles.bold]}>paid bills</Text>
          <Text>|</Text>
          <Text style={[styles.m3, styles.gray, styles.small]}>0</Text>
          <Text style={[styles.m3, styles.gray, styles.small]}>
            unpaid bills
          </Text>
        </View>

        {/*  This is Cardbody ---SECTION--- ROOMS */}
        <View style={styles.inlineContainer}>
          <FontAwesomeIcon icon={faBed} style={styles.m3} />
          <Text style={[styles.m3, styles.bold, styles.primaryColor]}>2</Text>
          <Text style={[styles.m3, styles.bold]}>rooms available</Text>
          <Text>|</Text>
          <Text style={[styles.m3, styles.gray, styles.small]}>3</Text>
          <Text style={[styles.m3, styles.gray, styles.small]}>
            rooms occupied
          </Text>
        </View>

        {/*  This is Cardbody ---SECTION--- BUTTON CHOICE */}
        <View
          style={[
            styles.inlineContainer,
            styles.m3,
            { justifyContent: "space-evenly" },
          ]}
        >
          <TouchableOpacity style={[styles.buttonCard, styles.button_white]}>
            <Text style={styles.button_white_font}>Modify Property</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonCard, styles.button_light_blue]}
          >
            <Text style={styles.button_light_blue_font}>Manage Rooms</Text>
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
    alignItems: "center",
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
  bold: {
    fontWeight: "700",
  },
  primaryColor: {
    color: "#00b6b9",
  },
  red: {
    color: "#f82424",
  },
  gray: {
    color: "#aaa",
  },
  small: {
    fontSize: 12,
    alignSelf: "flex-end",
  },
  m3: {
    margin: 3,
  },
});
