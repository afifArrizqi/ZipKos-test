import React, { useEffect } from "react";
import { View, Text, BackHandler } from "react-native";

export default function ExitApp() {
  useEffect(() => {
    BackHandler.exitApp();
  });
  return (
    <View>
      <Text>Exit</Text>
    </View>
  );
}
