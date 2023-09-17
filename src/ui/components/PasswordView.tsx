import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { View, Text, TouchableOpacity } from 'react-native';
interface PasswordViewProps {
  password?: string;
}
export const PasswordView = ({ password }: PasswordViewProps) => {
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
    <View alignItems="center" justifyContent="space-between" w="full">
      <Text fontSize="md" numberOfLines={1} flex={1}>
        {'*'.repeat(password?.length || 0)}
      </Text>
      <TouchableOpacity>
        <Feather
          name="clipboard"
          size={24}
          color="white"
          onPress={copyToClipboard}
        />
      </TouchableOpacity>
    </View>
  );
};
