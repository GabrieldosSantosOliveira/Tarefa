import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, VStack } from 'native-base';
export const EmptyPasswordList = () => {
  const { navigate } = useNavigation();
  return (
    <VStack flex={1} mt={7} justifyContent="center" alignItems="center">
      <Pressable onPress={() => navigate('home')}>
        <Text
          fontSize="lg"
          textAlign="justify"
          fontFamily="Poppins_700Bold"
          color="amber.200"
        >
          Nenhuma senha salva ainda tente adicionar uma nova senha
        </Text>
      </Pressable>
    </VStack>
  );
};
