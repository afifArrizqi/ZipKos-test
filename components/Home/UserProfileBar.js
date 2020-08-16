import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const UserProfileBar = () => {
  // JSX
  return (
    <View style={styles.mainBar}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/wallet.png")}
          style={{ width: 32, height: 32, marginHorizontal: 10 }}
        />
        <View>
          <Text style={styles.titleBar}>ZipBalance</Text>
          <Text style={styles.userBalance}>Rp. 12.300</Text>
        </View>
      </View>
      <View>
        <FontAwesomeIcon
          icon={faUserCircle}
          size={35}
          style={{ marginHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

export default UserProfileBar;

const styles = StyleSheet.create({
  mainBar: {
    backgroundColor: "#fff",
    textAlign: "left",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  titleBar: {
    fontWeight: "100",
  },
  userBalance: {
    color: "#00b6b9",
    fontWeight: "700",
    fontSize: 17,
  },
});
