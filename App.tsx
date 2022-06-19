import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import AddCard from "./src/components/add";
import light from "./src/components/theme/light";
export default function App() {
  return (
    <ThemeProvider theme={light}>
      <AddCard />
    </ThemeProvider>
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
