import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { HStack, IconButton, Text, useToast } from 'native-base';
interface PasswordViewProps {
  password?: string;
}
export const PasswordView = ({ password }: PasswordViewProps) => {
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
        {'*'.repeat(password?.length || 0)}
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
