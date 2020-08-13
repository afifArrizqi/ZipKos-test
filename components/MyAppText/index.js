import React from "react";
import { StyleSheet, Text } from "react-native";

export const MyAppText = (props) => {
  return <Text style={[props.style, styles.myAppText]}>{props.children}</Text>;
};

export default MyAppText;

const styles = StyleSheet.create({});
