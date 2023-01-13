import { HStack, Text } from 'native-base';
interface HeaderProps {
  title: string;
}
export const Header = ({ title }: HeaderProps) => {
  return (
    <HStack bg="gray.800" h="14" alignItems="center" justifyContent="center">
      <Text>{title}</Text>
    </HStack>
  );
};
