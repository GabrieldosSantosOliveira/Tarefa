import 'react-native-gesture-handler';
import { Loading } from '@components/Loading';
import { PasswordProvider } from '@context/PasswordContext';
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
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
    'SF-Pro-Display-Bold': require('./src/assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Display-Medium': require('./src/assets/fonts/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Regular': require('./src/assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-SemiBold': require('./src/assets/fonts/SF-Pro-Display-Semibold.otf'),
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <PasswordProvider>
          <StatusBar translucent backgroundColor="#27272a" />
          {fontsLoaded ? <Routes /> : <Loading />}
        </PasswordProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
