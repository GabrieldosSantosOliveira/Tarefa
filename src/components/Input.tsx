import { Input as NativeBaseInput, IInputProps } from 'native-base';
import { memo, forwardRef, ForwardRefRenderFunction } from 'react';

const InputBase: ForwardRefRenderFunction<IInputProps, IInputProps> = (
  { ...props },
  ref,
) => {
  return <NativeBaseInput ref={ref} {...props} />;
};
export const Input = memo(forwardRef(InputBase));
