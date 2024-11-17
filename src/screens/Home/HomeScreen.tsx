import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../utils/constants";
import { useSelector } from "react-redux";
import { Rating } from "react-native-ratings";
import moment from "moment";
const HomeScreen = () => {
  const { list } = useSelector((state) => state.app);
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const navigateToMapScreen = () => {
    navigation.navigate("Map");
  };
  console.log("list", list);
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
      {list.map((item, index) => (
        <View key={index}>
          <Text style={{ color: "white" }}>{item.title}</Text>

          <Rating
            style={{ paddingVertical: 10 }}
            tintColor={colors.background}
            readonly
            ratingCount={5}
            startingValue={item.rating}
          />
          <Text style={{ color: "white" }}>
            {moment(item.createdAt).format("DD/MM/YYYY")}
          </Text>
        </View>
      ))}
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
