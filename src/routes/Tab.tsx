import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AddCard } from './../screens/add';
const { Navigator, Screen } = createBottomTabNavigator();
export const TabNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={AddCard} />
    </Navigator>
  );
};
