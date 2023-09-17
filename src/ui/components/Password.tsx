import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { Text, View } from 'react-native';
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
      <View
        h="20"
        w="full"
        justifyContent="space-between"
        py={2}
        borderBottomWidth={1}
        borderBottomColor="white"
      >
        <Text fontSize="md">{application}</Text>
        <Text fontSize="md" numberOfLines={1}>
          {'*'.repeat(password.length)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const Password = memo(PasswordBase);
