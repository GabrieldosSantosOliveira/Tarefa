import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, Box, Heading } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import { memo } from 'react';
interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}
const HeaderBase = ({ title, showBackButton = false }: HeaderProps) => {
  const { goBack } = useNavigation();
  const EmptyBoxSpace = () => <Box w={6} h={6} />;
  return (
    <HStack
      bg="gray.800"
      h="14"
      w="full"
      alignItems="center"
      justifyContent="space-between"
    >
      {showBackButton ? (
        <IconButton
          icon={<CaretLeft weight="bold" size={24} color="white" />}
          onPress={goBack}
        />
      ) : (
        <EmptyBoxSpace />
      )}

      <Heading textAlign="center" size="sm">
        {title}
      </Heading>
      <EmptyBoxSpace />
    </HStack>
  );
};
export const Header = memo(HeaderBase);
