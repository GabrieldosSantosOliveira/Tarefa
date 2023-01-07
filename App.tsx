import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import AddCard from "./src/components/add";
import dark from "./src/styles/theme/dark";
import ligth from "./src/styles/theme/ligth";

export default function App() {
  return (
    <ThemeProvider theme={ligth}>
      <AddCard />
    </ThemeProvider>
  );
}
