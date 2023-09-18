import { FC } from 'react';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';
export interface RoundedIconProps extends TouchableOpacityProps {}
export const RoundedIcon: FC<RoundedIconProps> = ({ ...props }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.button}
      {...props}
    />
  );
};
const styles = StyleSheet.create({
  button: {
    width: 45,
    height: 45,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
