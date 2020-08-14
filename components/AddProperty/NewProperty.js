import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Category from "./Category";
import Facilities from "./Facilities";
import OtherInformation from "./OtherInformation";

const NewProperty = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.newProperty}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Property name</Text>
          <TextInput
            style={[styles.textInput, styles.oneLineInput]}
            placeholder="e.g Kost Putri Indah"
            placeholderTextColor="#777"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Description</Text>
          <TextInput
            style={[styles.textInput, styles.desriptionInput]}
            multiline={true}
            numberOfLines={4}
            maxLength={144}
            textAlignVertical="top"
            placeholder="Describe your property, attract target customers with an appealing description..."
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Category</Text>
          <Category />
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Area name</Text>
          <TextInput
            style={[styles.textInput, styles.oneLineInput]}
            placeholder="e.g Cilandak Barat, Jakarta Selatan"
            placeholderTextColor="#777"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Location</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Property photos</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Facilities</Text>
          <Facilities />
        </View>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Other information</Text>
          <OtherInformation />
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={[styles.activeButton, styles.saveButton]}>
          <Text
            style={[
              styles.bold,
              styles.activeTextButton,
              { letterSpacing: 2, textTransform: "uppercase" },
            ]}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewProperty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  newProperty: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  form: {
    paddingVertical: 10,
  },
  formTitle: {
    fontWeight: "700",
    marginBottom: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    letterSpacing: 1.1,
  },
  oneLineInput: {
    height: 35,
  },
  desriptionInput: {
    height: 100,
  },
  categoryForm: {
    flexDirection: "row",
  },
  categoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
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
  bottomBar: {
    marginBottom: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderTopColor: "#333",
  },
  saveButton: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
