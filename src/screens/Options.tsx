import { Settings } from '@context/PasswordContext';
import { usePassword } from '@hooks/usePassword';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text } from 'react-native';
export const Options = () => {
  const settings = usePassword();
  const { control } = useForm<Pick<Settings, 'lengthPassword'>>({
    defaultValues: {
      lengthPassword: settings.lengthPassword,
    },
  });
  const [values, setValues] = useState<Omit<Settings, 'lengthPassword'>>({
    hasUpperCase: settings.hasUpperCase,
    hasLowerCase: settings.hasLowerCase,
    hasNumbers: settings.hasNumbers,
    hasSymbols: settings.hasSymbols,
  });
  function onChange(value: boolean, name: keyof typeof values) {
    setValues((prev) => {
      return { ...prev, [name]: value };
    });
    settings.setSettings((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return (
    <View flex={1} safeArea>
      <View flex={1} p={5} alignItems="center" justifyContent="center">
        <LinearGradient
          colors={['#040F13', 'rgb(39, 39, 42)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <Text mt={3}>Tamanho da Senha</Text>
        <Controller
          name="lengthPassword"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Text mt={3}>{value}</Text>
          )}
        />
        <Text mt={3}>Caracteres a serem utilizados</Text>
      </View>
    </View>
  );
};
