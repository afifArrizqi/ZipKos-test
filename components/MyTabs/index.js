import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "../Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewProperty from "../AddProperty/NewProperty";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({});
