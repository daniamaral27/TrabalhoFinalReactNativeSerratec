import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CardProdutos } from "../../components/CardProdutos";
import { getProdutos } from "../../services/produto";
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../../contexts/AuthContext";
import Loading from "../../components/Loading";

export const Produtos = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [load, setLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  const zera = () => {
    setProdutos([])
  }

  const fetchData = async () => {
    zera();
    setIsLoading(true)
    const listProdutos = await getProdutos();
    setProdutos(listProdutos);
    setIsLoading(false)
    setList(
      produtos.filter((item) => {
        return item.nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
      })
    );
  }

  useEffect(() => {
    fetchData();
    navigation.addListener('focus', () => setLoad(!load))
  }, [searchText, load, navigation]);

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}
      <View style={styles.barraPesquisa}>
        <Searchbar
          style={styles.pesquisa}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity
          style={styles.btnPlus}
          onPress={() => navigation.navigate("Cadastrar")}
        >
          <AntDesign name="plussquareo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={(searchText === '' ? produtos : list)}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <CardProdutos item={item} />}
      />
    </View>
  );
};
