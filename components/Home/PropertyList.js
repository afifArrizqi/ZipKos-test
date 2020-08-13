import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PropertyCard from "./PropertyCard";

const kos = [
  { nama: "kos bu yanti", key: "1" },
  { nama: "kos bu yanti2", key: "2" },
  { nama: "kos bu yanti3", key: "3" },
  { nama: "kos bu yanti4", key: "4" },
  { nama: "kos bu yanti5", key: "5" },
  { nama: "kos bu yanti6", key: "6" },
  { nama: "kos bu yanti7", key: "7" },
  { nama: "kos bu yanti8", key: "8" },
];

const PropertyList = () => {
  // JSX
  return (
    <FlatList
      style={styles.flatList}
      keyExtractor={(kos) => kos.key}
      data={kos}
      renderItem={({ item }) => {
        return <PropertyCard name={item.nama} />;
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
