import { EmptyPasswordList } from '@components/EmptyPasswordList';
import { Input } from '@components/Input';
import { Loading } from '@components/Loading';
import { Password } from '@components/Password';
import { getRealm } from '@databases/realm';
import { IPasswordSchema } from '@databases/schemas/PasswordSchema';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

export const Passwords = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');
  const [passwords, setPasswords] = useState<IPasswordSchema[]>([]);
  async function loadPasswords() {
    try {
      const realm = await getRealm();
      const passwords = realm.objects<IPasswordSchema>('Password');
      setPasswords(passwords.map((password) => password));
    } catch (error) {
      console.log(error);
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
        const realm = await getRealm();
        const passwords = realm
          .objects<IPasswordSchema>('Password')
          .filtered(`application CONTAINS[c] "${filter}"`);
        setPasswords(passwords.map((password) => password));
      }
    },
    [filter],
  );
  useEffect(() => {
    filterPasswords();
  }, [filter, filterPasswords]);
  return (
    <View flex={1} safeArea>
      <View flex={1} p={5}>
        <LinearGradient
          colors={['#040F13', 'rgb(39, 39, 42)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <Input
          placeholder="Buscar senhas"
          onChangeText={setFilter}
          value={filter}
          InputLeftElement={
            <FontAwesome
              onPress={filterPasswords}
              style={{ marginLeft: 20 }}
              name="search"
              size={24}
              color="black"
            />
          }
        />
        {isLoading ? (
          <Loading bg="transparent" />
        ) : (
          <FlatList
            data={passwords}
            _contentContainerStyle={{ pb: 20 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item: { password, application, _id } }) => (
              <Password
                id={_id}
                application={application}
                password={password}
              />
            )}
            ListEmptyComponent={EmptyPasswordList}
          />
        )}
      </View>
    </View>
  );
};
