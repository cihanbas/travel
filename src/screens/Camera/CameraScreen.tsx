import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCameraPermissions, CameraView } from "expo-camera";

const CameraScreen = () => {
  const [permission, requestPermission] = useCameraPermissions();

  console.log("permission", permission);
  if (permission?.status !== "granted") {
    requestPermission();
    return;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
