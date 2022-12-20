import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";
import { styles } from "./style";

export const AtualizarProdutos = ({ route }) => {
  const navigation = useNavigation();
  const [nome, setNome] = useState(route.params.nome);
  const [descricao, setDescricao] = useState(route.params.descricao);
  const [valor, setValor] = useState(route.params.valor);
  const [qtdEstoque, setQtdEstoque] = useState(route.params.qtdEstoque);
  const [imagem, setImagem] = useState(route.params.imagem);
  const [listProdutos, setListProdutos] = useState([])

  const item = route.params.id;

  const updateProdutos = async (item) => {
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
      const { data } = await api.put("/produtos/" + item , novoProduto);
        const updateProdutos = listProdutos.map(produto => {
          if(produto.id == data.id){
            return data
          }
          return produto
        })
        setTimeout(() => {
          alert("Produto atualizado com sucesso")
        }, 2000);
        navigation.navigate('Produtos1')
        setListProdutos(updateProdutos)
    } catch (error) {
      console.log(e)
    }

  }
  
  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.container2}>
          <Text style={styles.texto}>Atualizar Produto</Text>
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
            placeholder="    Estoque"
            keyboardType="numeric"
            onChangeText={setQtdEstoque}
            value={qtdEstoque}
          />
          <TextInput
            style={styles.textImput}
            placeholder="    Imagem"
            onChangeText={setImagem}
            value={imagem}
          />
          <TouchableOpacity style={styles.buttonEntrar} onPress={() => updateProdutos(item)}>
            <Text style={styles.textoEntrar}>Atualizar Produto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCadastrar}

          >
            <Text style={styles.textoCadastrar} onPress={() => navigation.goBack()}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  );
};

