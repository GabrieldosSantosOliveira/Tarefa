import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';
import AddCard from './src/screens/add';
import dark from './src/styles/theme/dark';
import ligth from './src/styles/theme/ligth';

export default function App() {
  return (
    <ThemeProvider theme={ligth}>
      <Routes />
    </ThemeProvider>
  );
}
