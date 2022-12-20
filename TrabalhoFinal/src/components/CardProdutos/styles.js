import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
    },
    cardContainer: {
        flex:1,
        borderRadius: 10,
        margin: 7,
        height: 400,
        widht:"100%",
        borderWidth: 2,
        backgroundColor: "#FFFFF0",
        borderColor: "silver"
    },
    nome: {
       
        fontSize: 20,
        textAlign: "center",
        fontWeight: "500"
    },
    valor:{
        fontSize: 25,
        textAlign: "center",
        fontWeight: "800"
    },
    textos:{
        justifyContent: "space-around",
        alignItems:"center",
        height: "45%",
    },
    img: { 
        height: 190,
        width: 120,
    }
});