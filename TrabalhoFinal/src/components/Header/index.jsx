import React, { useContext } from "react";
import { View, Image, Text } from "react-native";
import { MaterialIcons  } from "@expo/vector-icons";
import AuthContext from "../../contexts/AuthContext";
import {styles}  from './styles';

export const Topo = () => {
  const { logoutContext } = useContext(AuthContext);
  return (
    <View style={styles.header}>
      <View style={styles.ImgText}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 100, height: 50 }}        />
        <Text style={styles.texto}>Roupas para seu bebê</Text>
      </View>
      <View style={styles.logout}>
        <MaterialIcons
          name="logout"
          size={24}
          color="black"
          onPress={() => logoutContext()}
        />
        <Text  style={styles.textoSair}>Sair</Text>
      </View>
    </View>
  );
};

