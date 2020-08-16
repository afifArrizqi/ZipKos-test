import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewProperty from "./components/AddProperty/NewProperty";
import MyTabs from "./components/MyTabs";
import { Provider } from "react-redux";
import store from "./store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NewProperty"
            component={NewProperty}
            options={{ title: "New Property", headerTitleAlign: "center" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
