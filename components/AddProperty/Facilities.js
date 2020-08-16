import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  faBath,
  faCouch,
  faDumbbell,
  faFan,
  faIceCream,
  faParking,
  faStore,
  faTshirt,
  faTv,
  faUtensils,
  faVideo,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Facility from "./Facility";

const Facilities = ({ onFacilityChange }) => {
  const [facilitiesList, setFacilitiesList] = useState([
    { id: 0, name: "wifi", state: false, icon: faWifi, title: "Free Wi-Fi" },
    { id: 1, name: "ac", state: false, icon: faFan, title: "AC" },
    { id: 2, name: "bathroom", state: false, icon: faBath, title: "Bathroom" },
    { id: 3, name: "cctv", state: false, icon: faVideo, title: "CCTV" },
    { id: 4, name: "dapur", state: false, icon: faUtensils, title: "Dapur" },
    { id: 5, name: "parkir", state: false, icon: faParking, title: "Parkir" },
    { id: 6, name: "tv", state: false, icon: faTv, title: "TV" },
    { id: 7, name: "kulkas", state: false, icon: faIceCream, title: "Kulkas" },
    {
      id: 8,
      name: "ruangTamu",
      state: false,
      icon: faCouch,
      title: "Ruang Tamu",
    },
    {
      id: 9,
      name: "mesinCuci",
      state: false,
      icon: faTshirt,
      title: "Mesin Cuci",
    },
    {
      id: 10,
      name: "fitness",
      state: false,
      icon: faDumbbell,
      title: "Fitness",
    },
    { id: 11, name: "kantin", state: false, icon: faStore, title: "Kantin" },
  ]);

  const selectFacilities = (facilitiesUpdate) => {
    const newFacilitiesList = [...facilitiesList];
    let FacilitiesNameList = [];
    newFacilitiesList[facilitiesUpdate.id] = facilitiesUpdate;
    FacilitiesNameList = newFacilitiesList
      .filter((facility) => facility.state)
      .map(({ title }) => title);
    setFacilitiesList(newFacilitiesList);
    onFacilityChange(FacilitiesNameList);
  };

  return (
    <View style={styles.facilities}>
      {facilitiesList.map((facility) => {
        return (
          <Facility
            key={facility.id}
            id={facility.id}
            name={facility.name}
            icon={facility.icon}
            title={facility.title}
            state={facility.state}
            onSelectFacility={selectFacilities}
          />
        );
      })}
    </View>
  );
};

export default Facilities;

const styles = StyleSheet.create({
  facilities: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
