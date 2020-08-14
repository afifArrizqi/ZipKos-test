import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Facility = ({ id, name, icon, title, state, onSelectFacility }) => {
  const handleFacilityChange = () => {
    const facilityUpdate = { id, name, state: !state, icon, title };
    onSelectFacility(facilityUpdate);
  };

  return (
    <TouchableWithoutFeedback
      style={[styles.facilitiesOption, state ? styles.facility_active : null]}
      onPress={handleFacilityChange}
    >
      <FontAwesomeIcon icon={icon} color={state ? "#fff" : "#333"} size={30} />
      <Text style={[state ? { color: "#fff" } : null, { marginTop: 5 }]}>
        {title}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default Facility;

const windowWidth = Dimensions.get("window").width - 20;

const styles = StyleSheet.create({
  facilitiesOption: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
  },
  facility_active: {
    backgroundColor: "#00b6b9",
    borderWidth: 0.3,
  },
});
