import { KeyViewFinder } from '@/ui/components/Icons/KeyViewFinder';
import { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
export interface FooterProps {
  onPress: () => void;
}
export const Footer: FC<FooterProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <KeyViewFinder isDark />
        <Text style={styles.text}>Criar nova senha</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(51, 51, 51)',
    height: 45,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  button: { flexDirection: 'row', alignItems: 'center' },
  text: {
    fontFamily: 'SF-Pro-Display-Medium',
    color: 'white',
  },
});
