import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}
export const Button: FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'SF-Pro-Display-SemiBold',
    fontSize: 14,
  },
});
