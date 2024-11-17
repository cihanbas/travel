import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/main/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
