import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import OtherInformationOptions from "./OtherInformationOptions";

const OtherInformation = ({ onInformationsChange }) => {
  const [informationOptions, setInformationOptions] = useState({
    "Belum termasuk listrik": false,
    "Pembayaran per bulan": false,
    "Tidak ada DP": false,
    "Tidak ada min. bayar": false,
  });
  const informationOptionsList = [
    "Belum termasuk listrik",
    "Pembayaran per bulan",
    "Tidak ada DP",
    "Tidak ada min. bayar",
  ];

  const changeInformationOptions = (informationUpdate) => {
    const newInformationOptions = {
      ...informationOptions,
      ...informationUpdate,
    };
    const validInformationList = [];
    for (let information in newInformationOptions) {
      if (newInformationOptions[information])
        validInformationList.push(information);
    }
    setInformationOptions(newInformationOptions);
    onInformationsChange(validInformationList);
  };
  return (
    <View>
      {informationOptionsList.map((option) => {
        return (
          <OtherInformationOptions
            key={option}
            title={option}
            onInformationOptionChange={changeInformationOptions}
          />
        );
      })}
    </View>
  );
};

export default OtherInformation;

const styles = StyleSheet.create({});
