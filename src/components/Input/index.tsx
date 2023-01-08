import { ReactNode, useState, memo, forwardRef, ForwardedRef } from 'react';
import {
  TextInputProps,
  Text,
  StyleProp,
  ViewStyle,
  View,
  TextInput,
} from 'react-native';

import { styles } from './styles';
interface InputProps extends TextInputProps {
  focus?: StyleProp<ViewStyle>;
  styleInput?: StyleProp<ViewStyle>;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
const InputBase = (
  { style, focus, leftIcon, rightIcon, ...props }: InputProps,
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const styleOnFocus = {
    ...(typeof style === 'object' ? style : {}),
    ...(isFocused && typeof focus === 'object'
      ? { ...{ borderColor: '#0f172a', borderWidth: 1 }, ...focus }
      : {}),
  };
  return (
    <View {...props} style={{ ...styles.container, ...styleOnFocus }}>
      <Text>{leftIcon}</Text>
      <TextInput
        ref={ref}
        style={{ ...styles.input, ...(typeof style === 'object' ? style : {}) }}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Text> {rightIcon} </Text>
    </View>
  );
};
export const Input = memo(forwardRef(InputBase));
