import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({

    container: {
      width: "90%", 
      height: 100, 
      alignSelf: "center",
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: '#BFE5F3', 
    },
  
    textoTopo: {
      textAlign: "center",
      fontSize: 20,
      lineHeight: 26,
      fontWeight: "bold",
      padding: 15,
      color: "#606060",
    },
  
    banner: {
      width: "100%",
      height: 800 / 768 * width,
      marginTop: 10,
    },
  
    container2: {
      
      width: "90%", 
      height: 150, 
      alignSelf: "center",
      padding: 15,
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#E7E7E7', 
    },
  
    bloco: {
      flexDirection: "row", 
      alignSelf: "center",
      width: "100%",
      paddingVertical: 10,
    },
  
    frete: {
      width: 40,
      height: 30,
    },
  
    pix: {
      width: 30,
      height: 30,
    },
  
    cartao: {
      width: 35,
      height: 25,
    },
  
    seguranca: {
      width: 28,
      height: 30,
    },
  
    texto: {
      flex: 1,
      color: "#ADADAD",
      fontWeight: "bold",
      marginHorizontal: 20,
    },
  
    banner2: {
      width: "50%",
      height: 500 / 768 * width,
      alignContent: "center",
    },
  
    imagens: {
      flexDirection: "row", 
    },
  
    textoMarca: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      color: "#606060",
    },
  
    container3: {
      width: "90%", 
      height: 350, 
      alignSelf: "center",
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#BFE5F3', 
    },
  
    coluna_marcas:{
      flexDirection: "row", 
      alignSelf: "center",
      paddingVertical: 10,
     
    },
  
    circulo:{
      flex: 1,
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: '#F7F7F7',
      marginLeft: 10,
    },
  
    marcas1: {
      width: 100,
      height: 50,
      alignSelf: "center",
      marginTop: 50,
      marginRight: 10,
    },
  
    marcas2: {
      width: 130,
      height: 40,
      alignSelf: "center",
      marginTop: 50,
    },
  
    marcas: {
      width: 100,
      height: 40,
      alignSelf: "center",
      marginTop: 50,
    }
});