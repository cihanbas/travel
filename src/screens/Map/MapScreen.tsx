import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { LongPressEvent, Marker } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { coordinates } from "../../utils/constants";

const MapScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    latitude: 39.91735,
    longitude: 32.791097,
  });
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const permission = await Location.requestForegroundPermissionsAsync();

      if (permission.status != "granted") {
        Alert.alert("uyari", "yetki vermek icin tamama tiklayiniz", [
          {
            text: "Tamam",
            onPress: () => Linking.openSettings(),
          },
          {
            text: "Vazgec",
          },
        ]);

        return;
      }
      const coordinate = await Location.getCurrentPositionAsync();
    } catch (error) {}
  };
  const goBack = () => {
    // navigation.navigate("Comment");
    navigation.goBack();
  };
  const updateLocation = (e: LongPressEvent) => {
    const coordinate = e.nativeEvent.coordinate;
    // setLocation(coordinate);
    coordinates.latitude = coordinate.latitude;
    coordinates.longitude = coordinate.longitude;

    navigation.navigate("Comment", { coordinate });
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      region={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }}
      onLongPress={(e) => updateLocation(e)}
    >
      <View style={[{ paddingTop: insets.top + 15 }]}>
        <Pressable onPress={goBack}>
          <Text>Go Back</Text>
        </Pressable>
      </View>

      <Marker
        coordinate={location}
        pinColor="green"
        title="Ankara"
        description=""
      />
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
