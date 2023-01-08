import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { Loading } from '@screens/Loading';
import ligth from '@styles/theme/ligth';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  return (
    <ThemeProvider theme={ligth}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
