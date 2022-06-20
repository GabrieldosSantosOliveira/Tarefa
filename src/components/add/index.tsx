import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Vibration, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";

import { GetRealm } from "../../databases/realm";
import Header from "../header";
import { TextArea, Input, Button, View, Text, Fieldset } from "./styles";

export const AddCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async () => {
    Vibration.vibrate(100);
    const realm = await GetRealm();
    realm.write(() => {
      realm.create("Card", {
        _id: uuid.v4(),
        title,
        description,
        content,
      });
    });
    Alert.alert("Cadastro", "Cadastrado com sucesso");
    realm.close();
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <Header />
        <View>
          <StatusBar backgroundColor="#fff" />
          <Fieldset> Cadastrar Noticia</Fieldset>
          <Text>Título</Text>
          <Input
            placeholder="Titulo"
            value={title}
            onChangeText={setTitle}
            maxLength={32}
          />
          <Text>Descrição</Text>

          <TextArea
            multiline
            placeholder="Descrição"
            onChangeText={setDescription}
            maxLength={300}
          />
          <Text>Conteudo</Text>

          <TextArea
            multiline
            placeholder="Conteudo"
            onChangeText={setContent}
          />
          <Button onPress={handleSubmit}>
            <Text>Confirmar</Text>
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default AddCard;
