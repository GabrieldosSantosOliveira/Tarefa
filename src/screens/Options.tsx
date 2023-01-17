import { Header } from '@components/Header';
import { Settings } from '@context/PasswordContext';
import { usePassword } from '@hooks/usePassword';
import { LinearGradient } from 'expo-linear-gradient';
import { VStack, Slider, Text, Checkbox } from 'native-base';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
    <VStack flex={1} safeArea>
      <Header showBackButton title="Opções" />
      <VStack flex={1} p={5} alignItems="center" justifyContent="center">
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
            <>
              <Text mt={3}>{value}</Text>

              <Slider
                colorScheme="amber"
                mt={3}
                onChange={onChange}
                onChangeEnd={(value) => {
                  settings.setSettings((prev) => {
                    return { ...prev, lengthPassword: value };
                  });
                }}
                w="full"
                minValue={1}
                maxValue={50}
                defaultValue={value}
                step={1}
              >
                <Slider.Track>
                  <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb bg="#333333" />
              </Slider>
            </>
          )}
        />
        <Text mt={3}>Caracteres a serem utilizados</Text>
        <VStack flex={1} w="full" alignItems="flex-start">
          <Checkbox
            mt={4}
            onChange={(value) => {
              settings.setSettings((prev) => {
                return { ...prev, hasUpperCase: value };
              });
              onChange(value, 'hasUpperCase');
            }}
            isDisabled={
              Object.keys(values).filter((key) => values[key] === true)
                .length === 1 && values.hasUpperCase === true
            }
            defaultIsChecked={values.hasUpperCase}
            value="hasUpperCase"
          >
            ABC
          </Checkbox>

          <Checkbox
            mt={4}
            onChange={async (value) => {
              settings.setSettings((prev) => {
                return { ...prev, hasLowerCase: value };
              });
              onChange(value, 'hasLowerCase');
            }}
            isDisabled={
              Object.keys(values).filter((key) => values[key] === true)
                .length === 1 && values.hasLowerCase === true
            }
            defaultIsChecked={values.hasLowerCase}
            value="hasLowerCase"
          >
            abc
          </Checkbox>

          <Checkbox
            mt={4}
            onChange={(value) => {
              settings.setSettings((prev) => {
                return { ...prev, hasNumbers: value };
              });
              onChange(value, 'hasNumbers');
            }}
            isDisabled={
              Object.keys(values).filter((key) => values[key] === true)
                .length === 1 && values.hasNumbers === true
            }
            defaultIsChecked={values.hasNumbers}
            value="hasNumbers"
          >
            123
          </Checkbox>

          <Checkbox
            mt={4}
            onChange={(value) => {
              settings.setSettings((prev) => {
                return { ...prev, hasSymbols: value };
              });
              onChange(value, 'hasSymbols');
            }}
            isDisabled={
              Object.keys(values).filter((key) => values[key] === true)
                .length === 1 && values.hasSymbols === true
            }
            defaultIsChecked={values.hasSymbols}
            value="hasSymbols"
          >
            #$&
          </Checkbox>
        </VStack>
      </VStack>
    </VStack>
  );
};
