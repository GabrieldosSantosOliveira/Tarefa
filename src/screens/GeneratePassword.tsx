import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { getRealm } from '@databases/realm';
import { IPasswordSchema } from '@databases/schemas/PasswordSchema';
import { Feather } from '@expo/vector-icons';
import { usePassword } from '@hooks/usePassword';
import { useNavigation } from '@react-navigation/native';
import { generatePassword } from '@services/generatePassword';
import { LinearGradient } from 'expo-linear-gradient';
import { VStack, Text, HStack, Pressable, useToast } from 'native-base';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import uuid from 'react-native-uuid';
interface IForm {
  application: string;
  emailOrPhone: string;
}
export const GeneratePasswordScreen = () => {
  const settingsPassword = usePassword();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { navigate } = useNavigation();
  const toast = useToast();
  const { handleSubmit, control } = useForm<IForm>({
    defaultValues: {
      application: '',
      emailOrPhone: '',
    },
  });
  const onHandleGeneratePassword = async ({
    application,
    emailOrPhone,
  }: IForm) => {
    try {
      const {
        hasLowerCase,
        hasNumbers,
        hasSymbols,
        hasUpperCase,
        lengthPassword,
      } = settingsPassword;
      setIsLoading(true);
      const realm = await getRealm();
      realm.write(() => {
        realm.create<IPasswordSchema>('Password', {
          _id: uuid.v4().toString(),
          application,
          emailOrPhone,
          created_at: new Date(),
          password: generatePassword({
            length: lengthPassword,
            hasLowerCase,
            hasUpperCase,
            hasNumbers,
            hasSymbols,
          }),
        });
      });
      console.log(
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
      );
      realm.objects('Password').map((password) => {
        console.log(password);
      });

      toast.closeAll();
      toast.show({
        title: 'Senha gerada com sucesso',
        bg: 'green.500',
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <VStack flex={1} safeArea>
      <Header title="Gerar senha" />

      <VStack flex={1} px={5}>
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
        <HStack alignItems="center" justifyContent="flex-end">
          <Pressable
            flexDirection="row"
            onPress={() => navigate('Stack', { screen: 'options' })}
          >
            <Feather name="filter" size={24} color="white" />
            <Text>Opções</Text>
          </Pressable>
        </HStack>
        <Controller
          name="application"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => {
            return (
              <Input
                mt={4}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nome do site ou app"
              />
            );
          }}
        />
        <Controller
          name="emailOrPhone"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => {
            return (
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                mt={4}
                placeholder="Usuário (Email ou telefone)"
              />
            );
          }}
        />

        <Button
          isLoading={isLoading}
          onPress={handleSubmit(onHandleGeneratePassword)}
          mt={4}
        >
          Salvar senha
        </Button>
      </VStack>
    </VStack>
  );
};
