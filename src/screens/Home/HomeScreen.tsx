import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../utils/constants";
const HomeScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const navigateToMapScreen = () => {
    navigation.navigate("Map");
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header, { height: 60 + top, paddingTop: top }]}>
        <View style={styles.header_content}>
          <Text style={styles.header_title}>Travel</Text>
          <Pressable style={styles.header_btn} onPress={navigateToMapScreen}>
            <AntDesign name="plus" size={24} color="white" />
          </Pressable>
        </View>
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
  },
  header_content: {
    flexDirection: "row",
    justifyContent: "space-between",

    flex: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  header_title: {
    textAlign: "center",
    flex: 1,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
