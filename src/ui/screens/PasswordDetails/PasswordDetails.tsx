import { Routes } from '@/@types/navigation';
import { PasswordUiModel } from '@/domain/entities/PasswordUiModel';
import { FindByIdPasswordUseCase } from '@/domain/use-cases/FindByIdPasswordUseCase';
import { PasswordView } from '@/ui/components/PasswordView';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import { Box } from './components/Box';
import { Header } from './components/Header';
import { Skeleton } from './components/Skeleton';

export interface PasswordDetailsProps {
  findByIdPasswordUseCase: FindByIdPasswordUseCase;
}
export const PasswordDetails: React.FC<PasswordDetailsProps> = ({
  findByIdPasswordUseCase,
}) => {
  const [password, setPassword] = useState<PasswordUiModel | null>();
  const { params } = useRoute<RouteProp<Pick<Routes, 'passwordDetails'>>>();
  const { id } = params;
  useEffect(() => {
    async function loadPassword() {
      const password = await findByIdPasswordUseCase.execute(id);
      setPassword(password);
    }
    loadPassword();
  }, [findByIdPasswordUseCase, id]);
  if (!password) {
    return <Skeleton />;
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        <Box title="Aplicação" subTitle={password.application} />
        <PasswordView password={password.password} />
        <Box subTitle={password.identifier} title="Identificador" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    gap: 12,
  },
  text: {
    color: 'white',
    fontFamily: 'SF-Pro-Display-SemiBold',
  },
});
