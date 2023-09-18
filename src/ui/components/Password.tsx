import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
interface IPasswordProps {
  id: string;
  application: string;
}
const PasswordBase = ({ id, application }: IPasswordProps) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate('passwordDetails', {
          id,
        })
      }
    >
      <View style={styles.container}>
        <Text style={styles.title}>{application}</Text>
        <Text style={styles.subTitle} numberOfLines={1}>
          {'*'.repeat(20)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const Password = memo(PasswordBase);
const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    justifyContent: 'space-between',
    gap: 6,
    backgroundColor: 'rgb(51, 51, 51)',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  title: {
    color: 'white',
    fontFamily: 'SF-Pro-Display-SemiBold',
    fontSize: 18,
  },
  subTitle: {
    color: 'white',
    fontFamily: 'SF-Pro-Display-SemiBold',
    fontSize: 16,
  },
});
