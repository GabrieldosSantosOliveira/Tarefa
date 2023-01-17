import { Spinner, Center } from 'native-base';
interface LoadingProps {
  bg?: 'transparent';
}
export const Loading = ({ bg }: LoadingProps) => {
  return (
    <Center flex={1} bg={bg === 'transparent' ? null : 'gray.900'}>
      <Spinner size="lg" color="white" />
    </Center>
  );
};
