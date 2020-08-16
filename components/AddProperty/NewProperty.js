import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addProperty } from "../../store/actions";
import Category from "./Category";
import Facilities from "./Facilities";
import ImageStack from "./ImageStack";
import LocationMap from "./LocationMap";
import OtherInformation from "./OtherInformation";

const NewProperty = ({ navigation }) => {
  // STATE
  const [propertyName, setPropertyName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyCategory, setPropertyCategory] = useState("");
  const [propertyArea, setPropertyArea] = useState("");
  const [propertyImages, setPropertyImages] = useState([]);
  const [propertyFacilities, setPropertyFacilities] = useState([]);
  const [propertyInformations, setPropertyInformations] = useState([]);
  const dispatch = useDispatch();

  // METHOD
  const changeCategory = (category) => {
    setPropertyCategory(category);
  };
  const changeImages = (images) => {
    setPropertyImages(images);
  };
  const changeFacilities = (facilities) => {
    setPropertyFacilities(facilities);
  };
  const changeInformations = (informations) => {
    setPropertyInformations(informations);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.newProperty}>
        {/** Property Name Input*/}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Property name</Text>
          <TextInput
            style={[styles.textInput, styles.oneLineInput]}
            placeholder="e.g Kost Putri Indah"
            placeholderTextColor="#777"
            onChangeText={(event) => setPropertyName(event)}
            value={propertyName}
          />
        </View>

        {/** Property Description Input*/}
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
            onChangeText={(event) => setPropertyDescription(event)}
            value={propertyDescription}
          />
        </View>

        {/** Property Category Input*/}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Category</Text>
          <Category onChangeCategory={changeCategory} />
        </View>

        {/** Property Area Input*/}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Area name</Text>
          <TextInput
            style={[styles.textInput, styles.oneLineInput]}
            placeholder="e.g Cilandak Barat, Jakarta Selatan"
            placeholderTextColor="#777"
            onChangeText={(event) => setPropertyArea(event)}
            value={propertyArea}
          />
        </View>

        {/** Property Location SHOW (*Does not work Yet)*/}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Location</Text>
          <LocationMap />
        </View>

        {/** Property Photos Input*/}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Property photos</Text>
          <ImageStack onImageListChange={changeImages} />
        </View>

        {/** Property Facilities Input*/}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Facilities</Text>
          <Facilities onFacilityChange={changeFacilities} />
        </View>

        {/** Property information Input*/}
        <View style={styles.form}>
          <Text style={styles.formTitle}>Other information</Text>
          <OtherInformation onInformationsChange={changeInformations} />
        </View>
      </ScrollView>

      {/** Submit SECTION*/}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.activeButton, styles.saveButton]}
          onPress={() => {
            dispatch(
              addProperty({
                propertyName,
                propertyDescription,
                propertyCategory,
                propertyArea,
                propertyImages,
                propertyFacilities,
                propertyInformations,
              })
            );
            navigation.navigate("MyTabs");
          }}
        >
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
