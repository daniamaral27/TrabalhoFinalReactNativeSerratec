import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  Button,
  Card,
  Title,
  Paragraph,
  Menu,
  Provider,
} from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { deleteProduto } from "../../services/produto";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const Detalhes = ({ route }) => {
  const item = route.params.item;
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const deleteProd = async () => {
      await deleteProduto(item.id)
      setTimeout(() => {
        alert("Produto deletado com sucesso")
      }, 2000);
      navigation.goBack();
  }

  return (
    <Provider style={styles.container}>
      <Card style={styles.cardContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.btnVoltar}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.info}> Informações do Produto </Text>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <TouchableOpacity style={styles.btnPlus} onPress={openMenu}>
                <AntDesign name="infocirlceo" size={24} color="black" />
              </TouchableOpacity>
            }
          >
            <Menu.Item
              onPress={() => {}}
              title="Pagina de detalhes do Produto"
            />
          </Menu>
        </View>
        <Card.Content>
          <Card.Cover style={styles.img} source={{ uri: item.imagem }} />
          <Title style={styles.nome}>{item.nome}</Title>
          <Paragraph style={styles.descricao}>{item.descricao}</Paragraph>
          <Paragraph style={styles.qtd}>Estoque: {item.qtdEstoque}</Paragraph>
          <Title style={styles.valor}>R$ {item.valor}</Title>
        </Card.Content>
        <Card.Actions>
        <Button onPress={() => navigation.navigate('Atualizar', item)}>Editar</Button>
          <Button style={styles.botaoExcluir} onPress={() => deleteProd()}>Excluir</Button>
        </Card.Actions>
      </Card>
    </Provider>
  );
};
