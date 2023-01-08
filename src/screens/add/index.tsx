import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Vibration, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';

import Header from '../../components/header';
import { GetRealm } from '../../databases/realm';
import * as S from './styles';

export const AddCard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = async () => {
    Vibration.vibrate(100);
    const realm = await GetRealm();
    realm.write(() => {
      realm.create('Card', {
        _id: uuid.v4(),
        title,
        description,
        content,
      });
    });
    Alert.alert('Cadastro', 'Cadastrado com sucesso');
    realm.close();
  };
  return (
    <SafeAreaView>
      <Header />
      <S.View>
        <StatusBar backgroundColor="#fff" />
        <S.Fieldset> Cadastrar Noticia</S.Fieldset>
        <S.Text>Título</S.Text>
        <S.Input
          defaultValue="nnn"
          placeholder="Titulo"
          value={title}
          onChangeText={setTitle}
          maxLength={32}
        />
        <S.Text>Descrição</S.Text>

        <S.TextArea
          multiline
          placeholder="Descrição"
          onChangeText={setDescription}
          maxLength={300}
        />
        <S.Text>Conteudo</S.Text>

        <S.TextArea
          multiline
          placeholder="Conteudo"
          onChangeText={setContent}
        />
        <S.Button onPress={handleSubmit}>
          <S.Text>Confirmar</S.Text>
        </S.Button>
      </S.View>
    </SafeAreaView>
  );
};

export default AddCard;
