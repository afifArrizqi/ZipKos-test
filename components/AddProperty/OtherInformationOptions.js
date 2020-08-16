import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const OtherInformationOptions = ({ title, onInformationOptionChange }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const changeInformationOption = (newValue) => {
    onInformationOptionChange({ [title]: newValue });
    setToggleCheckBox(newValue);
  };
  return (
    <View style={[styles.inlineContainer]}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={changeInformationOption}
        tintColors={{ true: "#00b6b9", false: "#aaa" }}
      />
      <Text>{title}</Text>
    </View>
  );
};

export default OtherInformationOptions;

const styles = StyleSheet.create({
  inlineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
