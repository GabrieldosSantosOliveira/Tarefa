import { generatePassword } from '@/services/generatePassword';
import { Button } from '@/ui/components/Button';
import { ArrowCounterClockWise } from '@/ui/components/Icons/ArrowCounterClockWise';
import { Input } from '@/ui/components/Input';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
export interface ModalProps {
  onClose: () => void;
  changePassword: (password: string) => void;
}
const ModalBase: ForwardRefRenderFunction<BottomSheetModal, ModalProps> = (
  { onClose, changePassword },
  ref,
) => {
  const [password, setPassword] = useState<string>('');
  useEffect(() => {
    const newPassword = generatePassword({
      length: 100,
      hasLowerCase: true,
      hasNumbers: true,
      hasSymbols: true,
      hasUpperCase: true,
    });
    setPassword(newPassword);
  }, []);
  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={['50%']}
      backgroundStyle={{ backgroundColor: 'rgb(51, 51, 51)' }}
      handleIndicatorStyle={{ backgroundColor: 'white' }}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Button title="Cancelar" onPress={onClose} />
          <TouchableOpacity
            onPress={() => {
              const newPassword = generatePassword({
                length: 100,
                hasLowerCase: true,
                hasNumbers: true,
                hasSymbols: true,
                hasUpperCase: true,
              });
              setPassword(newPassword);
              changePassword(newPassword);
            }}
          >
            <ArrowCounterClockWise isDark />
          </TouchableOpacity>
          <Button
            title="Usar"
            onPress={() => {
              changePassword(password);
              onClose();
            }}
          />
        </View>
        <Input
          editable={false}
          value={password}
          multiline
          style={{ height: 'auto', paddingVertical: 4 }}
        />
      </View>
    </BottomSheetModal>
  );
};
export const Modal = forwardRef(ModalBase);
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(51, 51, 51)',
    flex: 1,
    paddingHorizontal: 12,
    gap: 6,
    paddingVertical: 6,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
