import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      marginBottom: 15
    },
  
    image: {
      width: 120,
      height: 120,
      borderRadius: 125,
      elevation: 50,
      shadowColor: "#52006A",
      marginBottom: 20,
      marginTop: 20,
    },
  
    button: {
      width: 300,
      height: 50,
      backgroundColor: "lightblue",
      borderStyle: "solid",
      padding: 10,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: "green",
    },
  
    background: {
      justifyContent: "center",
      resizeMode: "cover",
      alignItems: "center",
    },
  });