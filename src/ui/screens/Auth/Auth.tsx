import { Routes } from '@/main/routes';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from './components/Button';

export const Auth = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    authenticate();
  }, []);
  const authenticate = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    setIsAuth(success);
  };
  if (isAuth) {
    return <Routes />;
  }
  return (
    <View style={styles.container}>
      <Button title="Autenticar" onPress={authenticate} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: 'flex-end',
  },
});
