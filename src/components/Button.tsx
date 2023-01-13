import { Button as NativeBaseButton, IButtonProps } from 'native-base';
export const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <NativeBaseButton
      h="14"
      w="full"
      rounded="md"
      bg="amber.400"
      _text={{ color: 'black' }}
      _pressed={{ bg: 'amber.500' }}
      {...props}
    >
      {children}
    </NativeBaseButton>
  );
};
