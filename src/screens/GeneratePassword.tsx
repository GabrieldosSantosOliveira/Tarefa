import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { getRealm } from '@databases/realm';
import { IPasswordSchema } from '@databases/schemas/CardSchema';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { generatePassword } from '@services/generatePassword';
import { LinearGradient } from 'expo-linear-gradient';
import { VStack, Text, HStack, Pressable, useToast } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import uuid from 'react-native-uuid';
interface IForm {
  application: string;
  emailOrPhone: string;
  surname: string;
}
export const GeneratePasswordScreen = () => {
  const { navigate } = useNavigation();
  const toast = useToast();
  const { handleSubmit, control } = useForm<IForm>({
    defaultValues: {
      application: '',
      surname: '',
      emailOrPhone: '',
    },
  });
  const onHandleGeneratePassword = async ({
    application,
    emailOrPhone,
    surname,
  }: IForm) => {
    const realm = await getRealm();
    realm.write(() => {
      realm.create<IPasswordSchema>('Password', {
        _id: uuid.v4().toString(),
        surname,
        application,
        emailOrPhone,
        created_at: new Date(),
        password: generatePassword({
          length: 50,
          hasLowerCase: true,
          hasUpperCase: true,
          hasNumbers: true,
          hasSymbols: true,
        }),
      });
    });

    toast.closeAll();
    toast.show({
      title: 'Senha gerada com sucesso',
      bg: 'green.500',
    });
  };
  return (
    <VStack flex={1} safeArea>
      <Header title="Gerar senha" />

      <VStack flex={1} px={5}>
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
        <HStack alignItems="center" justifyContent="flex-end">
          <Pressable
            flexDirection="row"
            onPress={() => navigate('Stack', { screen: 'options' })}
          >
            <Feather name="filter" size={24} color="white" />
            <Text>Opções</Text>
          </Pressable>
        </HStack>
        <Controller
          name="application"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => {
            return (
              <Input
                mt={4}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nome do site ou app"
              />
            );
          }}
        />
        <Controller
          name="emailOrPhone"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => {
            return (
              <Input
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                mt={4}
                placeholder="Usuário (Email ou telefone)"
              />
            );
          }}
        />
        <Controller
          name="surname"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => {
            return (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                mt={4}
                placeholder="Apelido"
              />
            );
          }}
        />
        <Button onPress={handleSubmit(onHandleGeneratePassword)} mt={4}>
          Salvar senha
        </Button>
      </VStack>
    </VStack>
  );
};
