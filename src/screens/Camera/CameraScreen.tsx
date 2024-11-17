import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { useCameraPermissions, CameraView, CameraType } from "expo-camera";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { inputValues } from "../Comment/CommentScreen";
import { useNavigation } from "@react-navigation/native";
const CameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>("back");

  const navigation = useNavigation();
  const camera = useRef<CameraView>(null);
  console.log("permission", permission);
  if (permission?.status !== "granted") {
    requestPermission();
    return;
  }
  const updateFacing = () => {
    setFacing((f) => (f == "back" ? "front" : "back"));
  };
  const takePicture = async () => {
    try {
      const image = await camera.current?.takePictureAsync();
      inputValues.imageUrl = image?.uri || "";
      navigation.goBack();
    } catch (error) {}
  };
  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} facing={facing} ref={camera}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            padding: 10,
          }}
        >
          <Pressable onPress={updateFacing}>
            <MaterialIcons name="flip-camera-android" size={24} color="black" />
          </Pressable>
          <Pressable onPress={takePicture}>
            <Text>Fotograf cek</Text>
          </Pressable>
        </View>
      </CameraView>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
