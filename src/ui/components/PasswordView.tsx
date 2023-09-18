import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useClipBoard } from '../hooks/useClipBoard';
import { SquareOnSquare } from './Icons/SquareOnSquare';
interface PasswordViewProps {
  password: string;
}
export const PasswordView = ({ password }: PasswordViewProps) => {
  const { clipboard } = useClipBoard();
  async function copyToClipboard() {
    await clipboard.setString(password);
  }
  return (
    <TouchableOpacity onPress={copyToClipboard}>
      <View style={styles.container}>
        <Text style={styles.text}>{'*'.repeat(20)}</Text>
        <SquareOnSquare isDark />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgb(51, 51, 51)',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  text: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: 'white',
  },
});
