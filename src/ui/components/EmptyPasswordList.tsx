import { StyleSheet, Text, View } from 'react-native';

export const EmptyPasswordList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nenhuma senha salva ainda tente adicionar uma nova senha
      </Text>
    </View>
  );
};
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'SF-Pro-Display-SemiBold',
    color: '#007AFF',
  },
});
