import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GeneratePasswordScreen } from '@screens/GeneratePassword';
const { Navigator, Screen } = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={GeneratePasswordScreen} />
    </Navigator>
  );
};
