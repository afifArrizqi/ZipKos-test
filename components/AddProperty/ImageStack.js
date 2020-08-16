import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageUploader from "./ImageUploader";

const ImageStack = ({ onImageListChange }) => {
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
    image6: null,
    image7: null,
    image8: null,
  });

  useEffect(() => {
    const imageList = [];
    for (let img in images) {
      if (images[img] !== null) {
        imageList.push(images[img]);
      }
    }
    onImageListChange(imageList);
  }, [images]);

  const imageChangeHandler = (imagesUpdate) => {
    setImages({ ...images, ...imagesUpdate });
  };

  return (
    <View style={styles.imageStack}>
      {Object.keys(images).map((image, index) => (
        <ImageUploader
          key={index}
          imageIndex={image}
          imageBase64={images[image]}
          onImageChange={imageChangeHandler}
        />
      ))}
    </View>
  );
};

export default ImageStack;

const styles = StyleSheet.create({
  imageStack: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
