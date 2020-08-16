import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const propertyList = useSelector((state) => state.property);

  // JSX
  return (
    <FlatList
      style={styles.flatList}
      keyExtractor={(propertyList, index) => `${index}`}
      data={propertyList}
      renderItem={({ item }) => {
        return (
          <PropertyCard name={item.propertyName} images={item.propertyImages} />
        );
      }}
    />
  );
};

export default PropertyList;

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "#e3e3e3",
  },
});
