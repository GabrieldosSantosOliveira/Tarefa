import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import AddCard from "./src/components/add";
import dark from "./src/components/theme/dark";
import ligth from "./src/components/theme/ligth";

export default function App() {
  return (
    <ThemeProvider theme={ligth}>
      <AddCard type="primary" />
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
