import { Feather, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GeneratePasswordScreen } from '@screens/GeneratePassword';
import { Options } from '@screens/Options';
import { PasswordDetails } from '@screens/PasswordDetails';
import { Passwords } from '@screens/Passwords';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();
export const TabNavigation = () => {
  const { colors, sizes } = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: sizes[3] },
        headerShown: false,
        tabBarInactiveTintColor: colors.yellow[400],
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#040F13',
          height: sizes[16],
          paddingVertical: sizes[4],
        },

        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? -10 : 0,
        },
      }}
    >
      <Screen
        name="home"
        component={GeneratePasswordScreen}
        options={{
          tabBarLabel: 'Gerar Senha',
          tabBarIcon: () => <Feather name="home" color="white" size={24} />,
        }}
      />
      <Screen
        name="passwords"
        component={Passwords}
        options={{
          tabBarLabel: 'Senhas Salvas',
          tabBarIcon: () => <Entypo name="archive" size={24} color="white" />,
        }}
      />
      <Screen
        name="passwordDetails"
        options={{ tabBarButton: () => null }}
        component={PasswordDetails}
      />
      <Screen
        name="options"
        options={{ tabBarButton: () => null }}
        component={Options}
      />
    </Navigator>
  );
};
