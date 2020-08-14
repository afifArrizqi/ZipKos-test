import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const OtherInformationOptions = ({ title, value }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={[styles.inlineContainer]}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
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
