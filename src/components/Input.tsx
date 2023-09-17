import { memo, forwardRef, ForwardRefRenderFunction } from 'react';
import { Text, View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native';
import { StyleSheet } from 'react-native';
export interface InputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
}
const InputBase: ForwardRefRenderFunction<TextInput, InputProps> = (
  { style, ...props },
  ref,
) => {
  return (
    <View style={styles.container}>
      {props.label ? <Text style={[styles.label]}>{props.label}</Text> : null}
      <TextInput
        style={[
          styles.input,
          props.errorMessage
            ? { borderWidth: 2, borderColor: '#FF3B30' }
            : undefined,
          style,
        ]}
        ref={ref}
        placeholderTextColor="black"
        {...props}
      />
      {props.errorMessage ? (
        <Text style={styles.errorMessage}>{props.errorMessage}</Text>
      ) : null}
    </View>
  );
};
export const Input = memo(forwardRef(InputBase));
const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  input: {
    borderRadius: 10,
    height: 44,
    width: '100%',
    backgroundColor: '#F2F2F7',
    fontSize: 14,
    fontFamily: 'SF-Pro-Display-Regular',
    paddingHorizontal: 11,
  },
  label: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#F2F2F7',
  },
  errorMessage: {
    fontFamily: 'SF-Pro-Display-Regular',
    color: '#FF3B30',
  },
});
