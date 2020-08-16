import React from "react";
import Home from "../Home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDoorOpen, faHome } from "@fortawesome/free-solid-svg-icons";
import Booking from "./Booking";
import Message from "./Message";
import Account from "./Account";
import {
  faEnvelope,
  faNewspaper,
  faUserCircle,
} from "@fortawesome/free-regular-svg-icons";
import { View } from "react-native";
import ExitApp from "./ExitApp";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#00b6b9",
        style: {
          paddingBottom: 15,
          paddingTop: 3,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => {
            return (
              <FontAwesomeIcon
                icon={faHome}
                color={focused ? color : "#aaa"}
                size={30}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: "Booking",
          tabBarIcon: ({ color, focused }) => {
            return (
              <FontAwesomeIcon
                icon={faNewspaper}
                color={focused ? color : "#aaa"}
                size={30}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Exit"
        component={ExitApp}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => {
            return (
              <View
                style={{
                  backgroundColor: "#ff3529",
                  borderRadius: 50,
                  padding: 15,
                  marginBottom: 5,
                  borderColor: "#fff",
                  borderWidth: 15,
                }}
              >
                <FontAwesomeIcon icon={faDoorOpen} color="#fff" size={30} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, focused }) => {
            return (
              <FontAwesomeIcon
                icon={faEnvelope}
                color={focused ? color : "#aaa"}
                size={30}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, focused }) => {
            return (
              <FontAwesomeIcon
                icon={faUserCircle}
                color={focused ? color : "#aaa"}
                size={30}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
