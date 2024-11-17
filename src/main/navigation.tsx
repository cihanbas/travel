// In App.js in a new project

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "../screens/Home/HomeScreen";
import { StatusBar } from "react-native";
import MapScreen from "../screens/Map/MapScreen";
import CommentScreen from "../screens/Comment/CommentScreen";
import { colors } from "../utils/constants";
import CameraScreen from "../screens/Camera/CameraScreen";

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Comment"
          component={CommentScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
