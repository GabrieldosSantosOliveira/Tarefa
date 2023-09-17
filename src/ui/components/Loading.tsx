import { FC } from 'react';
import { StyleSheet, ActivityIndicator, View, ViewProps } from 'react-native';
export interface LoadingProps extends ViewProps {}
export const Loading: FC<LoadingProps> = (props) => {
  return (
    <View {...props} style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18181b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
