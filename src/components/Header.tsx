import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, Box, Heading } from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
interface HeaderProps {
  title: string;
}
export const Header = ({ title }: HeaderProps) => {
  const { goBack, canGoBack } = useNavigation();
  const EmptyBoxSpace = () => <Box w={6} h={6} />;
  return (
    <HStack
      bg="gray.800"
      h="14"
      w="full"
      alignItems="center"
      justifyContent="space-between"
    >
      {canGoBack() ? (
        <IconButton
          icon={<CaretLeft size={30} color="white" />}
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
