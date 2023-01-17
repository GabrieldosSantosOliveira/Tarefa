import { useNavigation } from '@react-navigation/native';
import { Text, VStack } from 'native-base';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';
interface IPasswordProps {
  id: string;
  password: string;
  application: string;
}
const PasswordBase = ({ id, application, password }: IPasswordProps) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate('passwordDetails', {
          id,
        })
      }
    >
      <VStack
        h="20"
        w="full"
        justifyContent="space-between"
        py={2}
        borderBottomWidth={1}
        borderBottomColor="white"
      >
        <Text fontSize="md">{application}</Text>
        <Text fontSize="md">{'*'.repeat(password.length)}</Text>
      </VStack>
    </TouchableOpacity>
  );
};
export const Password = memo(PasswordBase);
