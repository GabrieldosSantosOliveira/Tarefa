import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { getRealm } from '@databases/realm';
import { IPasswordSchema } from '@databases/schemas/PasswordSchema';
import { Feather } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePassword } from '@hooks/usePassword';
import { useNavigation } from '@react-navigation/native';
import { generatePassword } from '@services/generatePassword';
import { generatePasswordSchemaValidation } from '@validations/generatePassword';
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';
import {
  VStack,
  Text,
  HStack,
  Pressable,
  useToast,
  FormControl,
  IconButton,
} from 'native-base';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import uuid from 'react-native-uuid';
interface IForm {
  application: string;
  emailOrPhone: string;
}
export const GeneratePasswordScreen = () => {
  const settingsPassword = usePassword();
  const { navigate } = useNavigation();
  const toast = useToast();
  const [password, setPassword] = useState<string>('');
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(generatePasswordSchemaValidation),
    defaultValues: {
      application: '',
      emailOrPhone: '',
    },
  });
  async function copyToClipboard() {
    try {
      await Clipboard.setStringAsync(password ?? '');
      toast.show({
        title: 'Senha copiada com sucesso!',
        bg: 'green.500',
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Erro ao copiar a senha!',
        bg: 'red.400',
        duration: 2000,
      });
    }
  }
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
      const realm = await getRealm();
      const newPassword = generatePassword({
        length: lengthPassword,
        hasLowerCase,
        hasUpperCase,
        hasNumbers,
        hasSymbols,
      });

      realm.write(() => {
        realm.create<IPasswordSchema>('Password', {
          _id: uuid.v4().toString(),
          application,
          emailOrPhone,
          created_at: new Date(),
          password: newPassword,
        });
      });
      setPassword(newPassword);
      toast.closeAll();
      toast.show({
        title: 'Senha gerada com sucesso',
        bg: 'green.500',
      });
    } catch (err) {
      console.log(err);
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
          <Pressable flexDirection="row" onPress={() => navigate('options')}>
            <Feather name="filter" size={24} color="white" />
            <Text>Opções</Text>
          </Pressable>
        </HStack>
        <Input
          mt={4}
          placeholder="Senha gerada"
          value={password}
          type="password"
          InputRightElement={
            <IconButton
              icon={
                <Feather
                  name="clipboard"
                  size={24}
                  color="white"
                  onPress={copyToClipboard}
                />
              }
            />
          }
        />
        <FormControl isRequired isInvalid={'application' in errors}>
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
          <FormControl.ErrorMessage>
            {errors.application?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={'emailOrPhone' in errors}>
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
          <FormControl.ErrorMessage>
            {errors.emailOrPhone?.message}
          </FormControl.ErrorMessage>
        </FormControl>
        <Button onPress={handleSubmit(onHandleGeneratePassword)} mt={4}>
          Salvar senha
        </Button>
      </VStack>
    </VStack>
  );
};
