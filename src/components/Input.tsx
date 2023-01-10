import { Input as NativeBaseInput, IInputProps } from 'native-base';
import { memo, forwardRef, ForwardRefRenderFunction } from 'react';

const InputBase: ForwardRefRenderFunction<IInputProps, IInputProps> = (
  { ...props },
  ref,
) => {
  return (
    <NativeBaseInput
      rounded="md"
      h="14"
      w="full"
      bg="info.900"
      ref={ref}
      borderWidth={0}
      placeholderTextColor="black"
      color="white"
      fontSize={14}
      _focus={{ bg: 'info.800', borderColor: 'orange.300', borderWidth: 1 }}
      {...props}
    />
  );
};
export const Input = memo(forwardRef(InputBase));
