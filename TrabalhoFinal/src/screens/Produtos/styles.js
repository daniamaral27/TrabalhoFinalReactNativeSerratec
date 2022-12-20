import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    titulo: {
        fontSize: 28,
        marginTop: 20,
        alignText: "center"
    },
    barraPesquisa:{
        flexDirection: "row",
        height:40,
        justifyContent: "space-between",
        alingContent:"center",
        margin:5,
    },
    pesquisa:{
        width: "88%",
        marginLeft:8,
        
    },
    btnPlus:{
        marginRight:8,
        marginTop: 8,
    }
});