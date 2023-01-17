import { Loading } from '@components/Loading';
import { PasswordProvider } from '@context/PasswordContext';
import { ThemeProvider } from '@context/ThemeContext';
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { THEME } from '@styles/theme';
import { NativeBaseProvider, StatusBar } from 'native-base';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <PasswordProvider>
        <ThemeProvider>
          <StatusBar translucent backgroundColor="#27272a" />
          {fontsLoaded ? <Routes /> : <Loading />}
        </ThemeProvider>
      </PasswordProvider>
    </NativeBaseProvider>
  );
}
