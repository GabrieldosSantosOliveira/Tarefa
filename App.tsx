import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { MakeStorageAdapter } from '@/main/factories/infra/storage/MakeStorageAdapter';
import { Loading } from '@/ui/components/Loading';
import { ClipBoardProvider } from '@/ui/context/ClipBoardContext';
import { PasswordProvider } from '@/ui/context/PasswordContext';
import { Auth } from '@/ui/screens/Auth/Auth';
import { useFonts } from 'expo-font';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Bold': require('./src/ui/assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Display-Medium': require('./src/ui/assets/fonts/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Regular': require('./src/ui/assets/fonts/SF-Pro-Display-Regular.otf'),
    'SF-Pro-Display-SemiBold': require('./src/ui/assets/fonts/SF-Pro-Display-Semibold.otf'),
  });
  return (
    <ClipBoardProvider>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <PasswordProvider storage={MakeStorageAdapter()}>
            <StatusBar translucent backgroundColor="rgb(51, 51, 51)" />
            {fontsLoaded ? <Auth /> : <Loading />}
          </PasswordProvider>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ClipBoardProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
