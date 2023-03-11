import { Header } from '@components/Header';
import { PasswordView } from '@components/PasswordView';
import { getRealm } from '@databases/realm';
import { IPasswordSchema } from '@databases/schemas/PasswordSchema';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, VStack } from 'native-base';
import { useEffect, useState } from 'react';

interface RouteParams {
  id: string;
}
export const PasswordDetails = () => {
  const [password, setPassword] = useState<Partial<IPasswordSchema> | null>();
  const route = useRoute();
  const { id } = route.params as RouteParams;
  useEffect(() => {
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
  }, [id]);

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
