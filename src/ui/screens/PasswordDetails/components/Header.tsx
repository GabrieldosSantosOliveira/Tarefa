import { ArrowLeft } from '@/ui/components/Icons/ArrowLeft';
import { RoundedIcon } from '@/ui/components/RoundedIcon';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';

export const Header = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <RoundedIcon onPress={goBack}>
        <ArrowLeft isDark />
      </RoundedIcon>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 12,
  },
});
