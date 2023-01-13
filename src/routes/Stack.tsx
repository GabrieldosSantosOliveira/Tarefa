import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Options } from '@screens/Options';
const { Navigator, Screen } = createNativeStackNavigator();
export const Stack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="options" component={Options} />
    </Navigator>
  );
};
