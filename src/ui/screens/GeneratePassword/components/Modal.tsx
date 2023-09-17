import { generatePassword } from '@/services/generatePassword';
import { Button } from '@/ui/components/Button';
import { ArrowCounterClockWise } from '@/ui/components/Icons/ArrowCounterClockWise';
import { Input } from '@/ui/components/Input';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { ForwardRefRenderFunction, forwardRef, useState } from 'react';
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
  return (
    <BottomSheetModal ref={ref} snapPoints={['50%']}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
            <ArrowCounterClockWise />
          </TouchableOpacity>
          <Button title="Usar" />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    paddingHorizontal: 12,
  },
});
