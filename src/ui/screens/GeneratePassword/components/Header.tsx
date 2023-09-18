import { Button } from '@/ui/components/Button';
import { ArrowLeft } from '@/ui/components/Icons/ArrowLeft';
import { RoundedIcon } from '@/ui/components/RoundedIcon';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
export interface HeaderProps {
  onPress: () => void;
}
export const Header: FC<HeaderProps> = ({ onPress }) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <RoundedIcon onPress={goBack}>
        <ArrowLeft isDark />
      </RoundedIcon>
      <Button onPress={onPress} title="Salvar" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(51, 51, 51)',
    height: 56,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  heading: {
    textAlign: 'center',
    fontSize: 14,
  },
});
