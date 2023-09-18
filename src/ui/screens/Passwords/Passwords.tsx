import { PasswordUiModel } from '@/domain/entities/PasswordUiModel';
import { FindAllPasswordUseCase } from '@/domain/use-cases/FindAllPasswordUseCase';
import { FindAllWithFilterPasswordUseCase } from '@/domain/use-cases/FindAllWithFilterPasswordUseCase';
import { EmptyPasswordList } from '@/ui/components/EmptyPasswordList';
import { Input } from '@/ui/components/Input';
import { Password } from '@/ui/components/Password';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { FloatingActionButton } from './components/FloatingActionButton';
import { Skeleton } from './components/Skeleton';
export interface PasswordsProps {
  findAllPasswordUseCase: FindAllPasswordUseCase;
  findAllWithFilterPasswordUseCase: FindAllWithFilterPasswordUseCase;
}
export const Passwords = ({
  findAllPasswordUseCase,
  findAllWithFilterPasswordUseCase,
}: PasswordsProps) => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');
  const [passwords, setPasswords] = useState<PasswordUiModel[]>([]);
  async function loadPasswords() {
    try {
      const passwords = await findAllPasswordUseCase.execute();
      setPasswords(passwords.map((password) => password));
    } finally {
      setIsLoading(false);
    }
  }
  useFocusEffect(
    useCallback(() => {
      loadPasswords();
    }, []),
  );
  const filterPasswords = useCallback(
    async function () {
      if (filter === '') {
        loadPasswords();
      } else {
        const passwords =
          await findAllWithFilterPasswordUseCase.execute(filter);
        setPasswords(passwords.map((password) => password));
      }
    },
    [filter],
  );
  useEffect(() => {
    filterPasswords();
  }, [filter, filterPasswords]);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Buscar senhas"
        onChangeText={setFilter}
        value={filter}
      />
      {isLoading ? (
        <Skeleton />
      ) : (
        <FlatList
          data={passwords}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 12, gap: 12 }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { application, id } }) => (
            <Password id={id} application={application} />
          )}
          ListEmptyComponent={EmptyPasswordList}
        />
      )}
      <FloatingActionButton onPress={() => navigate('home')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
