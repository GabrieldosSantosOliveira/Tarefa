import { Loading } from '@components/Loading';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Routes } from '@routes/index';
import { THEME } from '@styles/theme';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
