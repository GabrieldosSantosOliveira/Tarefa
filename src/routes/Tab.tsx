import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GeneratePasswordScreen } from '@screens/GeneratePassword';

import { Stack } from './Stack';
const { Navigator, Screen } = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={GeneratePasswordScreen}
        options={{
          tabBarLabel: 'Gerar Senha',
          tabBarIcon: () => <Feather name="home" color="black" size={24} />,
        }}
      />
      <Screen
        name="Stack"
        component={Stack}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
};
