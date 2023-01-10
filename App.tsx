import { Loading } from '@components/Loading';
import { ThemeProvider } from '@context/ThemeContext';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { THEME } from '@styles/theme';
import { NativeBaseProvider, StatusBar } from 'native-base';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <ThemeProvider>
        <StatusBar translucent backgroundColor="#27272a" />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
