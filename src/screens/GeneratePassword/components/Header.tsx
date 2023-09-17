import { Button } from '@components/Button';
import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
export interface HeaderProps {
  onPress: () => void;
}
export const Header: FC<HeaderProps> = ({ onPress }) => {
  const EmptyBoxSpace = () => <View style={{ width: 6, height: 6 }} />;
  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="Salvar" />
      <EmptyBoxSpace />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27272a',
    height: 56,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  heading: {
    textAlign: 'center',
    fontSize: 14,
  },
});
