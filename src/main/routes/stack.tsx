import { createStackNavigator } from '@react-navigation/stack';

import { MakeGeneratePassword } from '../factories/ui/screens/MakeGeneratePassword';
import { MakePasswordDetails } from '../factories/ui/screens/MakePasswordDetails';
import { MakePasswords } from '../factories/ui/screens/MakePasswords';
const StackNavigator = createStackNavigator();
export const Stack = () => {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="passwords" component={MakePasswords} />
      <StackNavigator.Screen name="home" component={MakeGeneratePassword} />
      <StackNavigator.Screen
        name="passwordDetails"
        component={MakePasswordDetails}
      />
    </StackNavigator.Navigator>
  );
};
