import { Skeleton as MotiSkeleton } from 'moti/skeleton';
import { StyleSheet, View } from 'react-native';
export const Skeleton = () => {
  return (
    <View style={styles.container}>
      <MotiSkeleton colorMode="dark" width="100%" height={80} radius={8} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
