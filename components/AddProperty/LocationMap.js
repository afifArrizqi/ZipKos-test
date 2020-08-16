import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const LocationMap = () => {
  const windowWidth = Dimensions.get("window").width - 20;
  return (
    <View style={{ borderRadius: 15 }}>
      <MapView style={{ width: windowWidth, height: 200 }} />
    </View>
  );
};

export default LocationMap;

const styles = StyleSheet.create({});
