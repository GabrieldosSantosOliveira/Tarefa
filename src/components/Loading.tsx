import { Spinner, Center } from 'native-base';
export const Loading = () => {
  return (
    <Center flex={1} bg="gray.900">
      <Spinner size="lg" color="white" />
    </Center>
  );
};
