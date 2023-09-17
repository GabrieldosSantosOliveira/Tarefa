import { Options } from '@/ui/screens/Options';
import { PasswordDetails } from '@/ui/screens/PasswordDetails';
import { Passwords } from '@/ui/screens/Passwords';
import { createStackNavigator } from '@react-navigation/stack';

import { MakeGeneratePassword } from '../factories/ui/screens/MakeGeneratePassword';
const StackNavigator = createStackNavigator();
export const Stack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="home" component={MakeGeneratePassword} />
      <StackNavigator.Screen name="passwords" component={Passwords} />
      <StackNavigator.Screen
        name="passwordDetails"
        component={PasswordDetails}
      />
      <StackNavigator.Screen name="options" component={Options} />
    </StackNavigator.Navigator>
  );
};
