import { Header } from '@components/Header';
import { getRealm } from '@databases/realm';
import { IPasswordSchema } from '@databases/schemas/PasswordSchema';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';
import { HStack, IconButton, Text, VStack, useToast } from 'native-base';
import { useCallback, useState } from 'react';

interface RouteParams {
  id: string;
}
interface PasswordViewProps {
  password?: string;
}
const PasswordView = ({ password }: PasswordViewProps) => {
  const toast = useToast();
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
  return (
    <HStack alignItems="center" justifyContent="space-between" w="full">
      <Text fontSize="md" mt={4}>
        {password}
      </Text>
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
    </HStack>
  );
};
export const PasswordDetails = () => {
  const [password, setPassword] = useState<Partial<IPasswordSchema> | null>();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  useFocusEffect(
    useCallback(() => {
      async function loadPassword() {
        try {
          const realm = await getRealm();
          const password = realm.objectForPrimaryKey<IPasswordSchema>(
            'Password',
            id,
          );

          setPassword({
            _id: password?._id,
            application: password?.application,
            password: password?.password,
            emailOrPhone: password?.emailOrPhone,
          });
        } catch (error) {
          console.log(error);
        }
      }
      loadPassword();
    }, [id]),
  );

  return (
    <VStack flex={1} safeArea>
      <Header title="Senha" showBackButton />
      <VStack flex={1} p={5}>
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
        <Text fontFamily="Poppins_700Bold" textAlign="center" fontSize="lg">
          {password?.application}
        </Text>
        <Text fontSize="md" mt={4}>
          Senha
        </Text>
        <PasswordView password={password?.password} />
        <Text fontSize="md" mt={4}>
          Email ou telefone
        </Text>
        <Text fontSize="md" mt={4}>
          {password?.emailOrPhone}
        </Text>
      </VStack>
    </VStack>
  );
};
