import React, { useState } from "react";
import { StyleSheet, View, Image, Alert, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ImageUploader({
  imageIndex,
  imageBase64,
  onImageChange,
}) {
  const [image, setImage] = useState(imageBase64);
  const windowWidth = Dimensions.get("window").width - 20;

  const askForPermission = async () => {
    const permissionResult = await Permissions.askAsync(Permissions.CAMERA);
    if (permissionResult.status !== "granted") {
      Alert.alert("no permissions to access camera!", [{ text: "ok" }]);
      return false;
    }
    return true;
  };

  const takeImage = async () => {
    // make sure that we have the permission
    const hasPermission = await askForPermission();
    if (!hasPermission) {
      return;
    } else {
      // launch the camera with the following settings
      let imageByPicker = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
        base64: true,
      });
      // make sure a image was taken:
      if (!imageByPicker.cancelled) {
        setImage(imageByPicker.base64);
        onImageChange({ [imageIndex]: `${imageByPicker.base64}` });
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={takeImage}>
        <Image
          source={
            image !== null
              ? { uri: "data:image/jpeg;base64," + image }
              : require("../../assets/defaultImage.jpg")
          }
          style={{ width: windowWidth / 4, height: windowWidth / 4 }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
