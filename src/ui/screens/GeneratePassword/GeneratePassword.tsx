import { SavePasswordUseCase } from '@/domain/use-cases/SavePasswordUseCase';
import { ControlledInput } from '@/ui/components/ControlledInput';
import { generatePasswordSchemaValidation } from '@/ui/validations/generatePassword';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
interface IForm {
  application: string;
  identifier: string;
  password: string;
}
export interface GeneratePasswordProps {
  savePasswordUseCase: SavePasswordUseCase;
}
export const GeneratePasswordScreen = ({
  savePasswordUseCase,
}: GeneratePasswordProps) => {
  const modalRef = useRef<BottomSheetModal>(null);
  const [showFooter, setShowFooter] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    resolver: yupResolver(generatePasswordSchemaValidation),
  });
  const onHandleGeneratePassword = async (data: IForm) => {
    await savePasswordUseCase.execute(data);
  };
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Header onPress={handleSubmit(onHandleGeneratePassword)} />
        <View style={styles.form}>
          <ControlledInput
            secureTextEntry
            name="password"
            control={control}
            placeholder="Senha gerada"
            label="Senha"
            errorMessage={errors.password?.message}
            onFocus={() => {
              setShowFooter(true);
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
            name="identifier"
            control={control}
            placeholder="Usuário (Email ou telefone)"
            label="Usuario"
            errorMessage={errors.identifier?.message}
          />
        </View>
        {showFooter ? (
          <Footer
            onPress={() => {
              modalRef.current?.present();
              setShowFooter(false);
            }}
          />
        ) : null}
        <Modal
          ref={modalRef}
          onClose={() => modalRef.current?.close()}
          changePassword={(password) => setValue('password', password)}
        />
      </View>
    </BottomSheetModalProvider>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  form: { paddingHorizontal: 12, gap: 12 },
});
