import { useClipBoard } from '@/ui/hooks/useClipBoard';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export interface BoxProps {
  title: string;
  subTitle: string;
}
export const Box: React.FC<BoxProps> = ({ title, subTitle }) => {
  const { clipboard } = useClipBoard();
  return (
    <TouchableOpacity
      onPress={() => {
        clipboard.setString(subTitle);
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgb(51, 51, 51)',
    height: 'auto',
    borderRadius: 8,
    paddingHorizontal: 12,
    gap: 6,
    paddingVertical: 6,
  },
  text: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: 'white',
  },
  subTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: 'white',
    fontSize: 12,
  },
});
