import { Header } from '@components/Header';
import { Settings } from '@context/PasswordContext';
import { usePassword } from '@hooks/usePassword';
import { LinearGradient } from 'expo-linear-gradient';
import { VStack, Slider, Text, Checkbox } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
export const Options = () => {
  const settings = usePassword();
  const { control } = useForm<Settings>({
    defaultValues: settings,
  });

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
                minValue={2}
                maxValue={24}
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
          <Controller
            name="hasUpperCase"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                mt={4}
                onChange={(value) => {
                  settings.setSettings((prev) => {
                    return { ...prev, hasUpperCase: value };
                  });
                  onChange(value);
                }}
                defaultIsChecked={value}
                value="hasUpperCase"
              >
                ABC
              </Checkbox>
            )}
          />
          <Controller
            name="hasLowerCase"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                mt={4}
                onChange={async (value) => {
                  settings.setSettings((prev) => {
                    return { ...prev, hasLowerCase: value };
                  });
                  onChange(value);
                }}
                defaultIsChecked={value}
                value="hasLowerCase"
              >
                abc
              </Checkbox>
            )}
          />
          <Controller
            name="hasNumbers"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                mt={4}
                onChange={(value) => {
                  settings.setSettings((prev) => {
                    return { ...prev, hasNumbers: value };
                  });
                  onChange(value);
                }}
                defaultIsChecked={value}
                value="hasNumbers"
              >
                123
              </Checkbox>
            )}
          />
          <Controller
            name="hasSymbols"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                mt={4}
                onChange={(value) => {
                  settings.setSettings((prev) => {
                    return { ...prev, hasSymbols: value };
                  });
                  onChange(value);
                }}
                defaultIsChecked={value}
                value="hasSymbols"
              >
                #$&
              </Checkbox>
            )}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};
