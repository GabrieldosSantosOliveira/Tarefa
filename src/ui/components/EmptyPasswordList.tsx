import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

export const EmptyPasswordList = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
      }}
    >
      <Pressable onPress={() => navigate('home')}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'justify',
            fontFamily: 'Poppins_700Bold',
            color: '#fde68a',
          }}
        >
          Nenhuma senha salva ainda tente adicionar uma nova senha
        </Text>
      </Pressable>
    </View>
  );
};
