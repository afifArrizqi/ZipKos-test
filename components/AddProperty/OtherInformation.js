import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OtherInformationOptions from "./OtherInformationOptions";

const OtherInformation = () => {
  const [informationOptions, setInformationOptions] = useState({
    "Belum termasuk listrik": false,
    "Pembayaran per bulan": false,
    "Tidak ada DP": false,
    "Tidak ada min. bayar": false,
  });
  return (
    <View>
      {Object.keys(informationOptions).map((option) => {
        return (
          <OtherInformationOptions
            key={option}
            title={option}
            value={informationOptions[option]}
          />
        );
      })}
    </View>
  );
};

export default OtherInformation;

const styles = StyleSheet.create({});
