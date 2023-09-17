import 'react-native-gesture-handler';
import { MakeStorageAdapter } from '@/main/factories/infra/storage/MakeStorageAdapter';
import { Routes } from '@/main/routes/index';
import { Loading } from '@/ui/components/Loading';
import { PasswordProvider } from '@/ui/context/PasswordContext';
import {
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_700Bold,
    'SF-Pro-Display-Bold': require('./src/ui/assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Display-Medium': require('./src/ui/assets/fonts/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Regular': require('./src/ui/assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-SemiBold': require('./src/ui/assets/fonts/SF-Pro-Display-Semibold.otf'),
  });
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <PasswordProvider storage={MakeStorageAdapter()}>
          <StatusBar translucent backgroundColor="#27272a" />
          {fontsLoaded ? <Routes /> : <Loading />}
        </PasswordProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
