import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCameraPermissions } from "expo-camera";

const CameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();

  console.log("permission", permission);
  if (permission?.status !== "granted") {
    requestPermission();
  }
  return (
    <View>
      <Text>CameraScreen</Text>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
