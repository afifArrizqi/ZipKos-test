import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Category = ({ onChangeCategory }) => {
  const [category, setCategory] = useState({
    male: false,
    female: false,
    male_female: false,
  });

  const selectMale = () => {
    setCategory({
      male: true,
      female: false,
      male_female: false,
    });
    onChangeCategory("male");
  };
  const selectFemale = () => {
    setCategory({
      male: false,
      female: true,
      male_female: false,
    });
    onChangeCategory("female");
  };
  const selectMaleFemale = () => {
    setCategory({
      male: false,
      female: false,
      male_female: true,
    });
    onChangeCategory("male & female");
  };

  return (
    <View style={styles.categoryForm}>
      <TouchableWithoutFeedback
        style={[
          styles.categoryButton,
          category.male ? styles.activeButton : null,
        ]}
        onPress={selectMale}
      >
        <Text
          style={[
            styles.bold,
            category.male ? styles.activeTextButton : styles.gray,
          ]}
        >
          Male
        </Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={[
          styles.categoryButton,
          category.female ? styles.activeButton : null,
        ]}
        onPress={selectFemale}
      >
        <Text
          style={[
            styles.bold,
            category.female ? styles.activeTextButton : styles.gray,
          ]}
        >
          Female
        </Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        style={[
          styles.categoryButton,
          category.male_female ? styles.activeButton : null,
        ]}
        onPress={selectMaleFemale}
      >
        <Text
          style={[
            styles.bold,
            category.male_female ? styles.activeTextButton : styles.gray,
          ]}
        >
          Male & Female
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryForm: {
    flexDirection: "row",
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#aaa",
  },
  activeButton: {
    backgroundColor: "#00b6b9",
    borderWidth: 1,
    borderColor: "#00b6b9",
  },
  activeTextButton: {
    color: "#fff",
  },
  gray: {
    color: "#aaa",
  },
  bold: {
    fontWeight: "700",
  },
});
