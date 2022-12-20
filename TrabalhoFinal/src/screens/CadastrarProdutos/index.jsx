import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import api from "../../services/api";
import { styles } from "./style";

export const CadastrarProdutos = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [qtdEstoque, setQtdEstoque] = useState(0);
  const [imagem, setImagem] = useState("");
  const [listProdutos, setListProdutos] = useState([])
  
  const handleProduto = async () => {
    if (nome == "" || descricao == "" || valor == "" || qtdEstoque == "" || imagem == "") {
      alert("Preencha todos os campos");
      return;
    }

    const novoProduto = {
      nome: nome,
      descricao: descricao,
      valor: valor,
      qtdEstoque: qtdEstoque,
      imagem: imagem
    };

    try {
      const { data } = await api.post("/produtos", novoProduto);
      setListProdutos([...listProdutos, data]);
      setTimeout(() => {
        alert("Produto cadastrado com sucesso")
      }, 2000);
      navigation.goBack();
    } catch (error) {
      console.log(e)
    }

  };

  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.texto}>Cadastrar Produto</Text>
          <TextInput
            style={styles.textImput}
            placeholder="    Nome"
            onChangeText={setNome}
            value={nome}
          />
          <TextInput
            style={styles.textImput}
            placeholder="    Descrição"
            onChangeText={setDescricao}
            value={descricao}
          />
          <TextInput
            style={styles.textImput}
            keyboardType="numeric"
            placeholder="    Valor"
            onChangeText={setValor}
            value={valor}
          />
          <TextInput
            style={styles.textImput}
            keyboardType="numeric"
            placeholder="    Estoque"
            onChangeText={setQtdEstoque}
            value={qtdEstoque}
          />
          <TextInput
            style={styles.textImput}
            placeholder="    Imagem"
            onChangeText={setImagem}
            value={imagem}
          />
          <TouchableOpacity style={styles.buttonEntrar} onPress={() => handleProduto()}>
            <Text style={styles.textoEntrar}>Cadastrar Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCadastrar}>
            <Text style={styles.textoCadastrar} onPress={() => navigation.goBack()}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
};