import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { TextArea, Input, Button, Title } from "./styles";
export const AddCard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  return (
    <SafeAreaView>
      <Title> Cadatrar Noticia</Title>
      <Input placeholder="Titulo" value={title} onChangeText={setTitle} />
      <TextArea
        multiline
        placeholder="Descrição"
        onChangeText={setDescription}
      />
      <TextArea multiline placeholder="Conteudo" onChangeText={setContent} />
      <Button title="Enviar" />
    </SafeAreaView>
  );
};

export default AddCard;
