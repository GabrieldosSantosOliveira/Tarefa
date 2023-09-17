import { ControlledInput } from '@components/ControlledInput';
import { getRealm } from '@databases/realm';
import { IPasswordSchema } from '@databases/schemas/PasswordSchema';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePassword } from '@hooks/usePassword';
import { generatePassword } from '@services/generatePassword';
import { generatePasswordSchemaValidation } from '@validations/generatePassword';
import * as Clipboard from 'expo-clipboard';
import { randomUUID } from 'expo-crypto';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { Header } from './components/Header';
import { Modal } from './components/Modal';
interface IForm {
  application: string;
  emailOrPhone: string;
  password: string;
}
export const GeneratePasswordScreen = () => {
  const modalRef = useRef<BottomSheetModal>(null);
  const settingsPassword = usePassword();
  const [password, setPassword] = useState<string>('');
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    resolver: yupResolver(generatePasswordSchemaValidation),
    defaultValues: {
      application: '',
      emailOrPhone: '',
    },
  });
  async function copyToClipboard() {
    try {
      await Clipboard.setStringAsync(password ?? '');
    } catch (error) {}
  }
  const onHandleGeneratePassword = async ({
    application,
    emailOrPhone,
  }: IForm) => {
    try {
      const realm = await getRealm();
      const newPassword = generatePassword({
        length: 300,
        hasLowerCase: true,
        hasUpperCase: true,
        hasNumbers: true,
        hasSymbols: true,
      });
      setValue('password', newPassword);

      realm.write(() => {
        realm.create<IPasswordSchema>('Password', {
          _id: randomUUID(),
          application,
          emailOrPhone,
          created_at: new Date(),
          password: newPassword,
        });
      });
      setPassword(newPassword);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Header onPress={handleSubmit(onHandleGeneratePassword)} />

        <View style={{ paddingHorizontal: 12, gap: 12 }}>
          <ControlledInput
            secureTextEntry
            name="password"
            control={control}
            placeholder="Senha gerada"
            label="Senha"
            errorMessage={errors.password?.message}
            onFocus={() => {
              modalRef.current?.present();
            }}
          />

          <ControlledInput
            name="application"
            control={control}
            placeholder="Nome do site ou app"
            label="Site"
            errorMessage={errors.application?.message}
          />
          <ControlledInput
            name="emailOrPhone"
            control={control}
            placeholder="Usuário (Email ou telefone)"
            label="Usuario"
            errorMessage={errors.emailOrPhone?.message}
          />
        </View>
        <Modal
          ref={modalRef}
          onClose={() => modalRef.current?.close()}
          changePassword={(password) => setValue('password', password)}
        />
      </View>
    </BottomSheetModalProvider>
  );
};
