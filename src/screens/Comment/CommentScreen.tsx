import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors, coordinates } from "../../utils/constants";
import { useRoute } from "@react-navigation/native";
import { Rating, AirbnbRating } from "react-native-ratings";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const inputValues = {
  title: "",
  description: "",
  rating: 5,
};
const CommentScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 10 }]}>
      <View style={{ flex: 1 }}>
        <View style={styles.input_wrapper}>
          <Text style={styles.input_label}>Baslik</Text>
          <TextInput
            style={styles.input}
            placeholder="Baslik giriniz"
            placeholderTextColor={colors.placeholder}
            onChangeText={(text) => {
              inputValues.title = text;
            }}
          ></TextInput>
        </View>

        <View style={styles.input_wrapper}>
          <Text style={styles.input_label}>Yorum</Text>
          <TextInput
            style={[
              styles.input,
              {
                height: 100,
              },
            ]}
            placeholder="Yorum giriniz"
            placeholderTextColor={colors.placeholder}
            onChangeText={(text) => {
              inputValues.description = text;
            }}
            multiline
          ></TextInput>
        </View>
        <Rating
          style={{ paddingVertical: 10 }}
          tintColor={colors.background}
          onFinishRating={(rating: number) => {
            inputValues.rating = rating;
          }}
        />

        <Pressable style={styles.picture_icon}>
          <AntDesign name="picture" size={24} color="white" />
        </Pressable>
      </View>

      <Pressable style={styles.save_btn}>
        <Text style={styles.save_btn_text}>Kaydet</Text>
      </Pressable>
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    paddingVertical: 10,
    color: colors.text,
  },
  input_label: {
    fontSize: 16,
    color: colors.text,
  },
  input_wrapper: {
    backgroundColor: colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 6,
  },
  picture_icon: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.primary,
    alignSelf: "flex-start",
  },
  save_btn: {
    backgroundColor: colors.primary,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  save_btn_text: {
    color: colors.text,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
