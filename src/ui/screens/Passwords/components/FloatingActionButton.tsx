import { PlusMinusCircle } from '@/ui/components/Icons/PlusMinusCircle';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export interface FloatingActionButtonProps {
  onPress: () => void;
}
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <PlusMinusCircle fill="white" />
        <Text style={styles.text}>Nova Senha</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 44,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  button: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 18,
    gap: 12,
  },
  text: {
    fontFamily: 'SF-Pro-Display-Bold',
    color: 'white',
  },
});
