import { Feather, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { GeneratePasswordScreen } from '@screens/GeneratePassword/GeneratePassword';
import { Options } from '@screens/Options';
import { PasswordDetails } from '@screens/PasswordDetails';
import { Passwords } from '@screens/Passwords';
const StackNavigator = createStackNavigator();
export const Stack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="home" component={GeneratePasswordScreen} />
      <StackNavigator.Screen name="passwords" component={Passwords} />
      <StackNavigator.Screen
        name="passwordDetails"
        component={PasswordDetails}
      />
      <StackNavigator.Screen name="options" component={Options} />
    </StackNavigator.Navigator>
  );
};
