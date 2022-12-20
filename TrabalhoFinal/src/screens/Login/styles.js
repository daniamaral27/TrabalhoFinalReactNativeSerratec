import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: 'center',
        alignContent: "center",
    },
    textImput: {
        borderWidth: 2,
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 30,
        padding: 10,
        borderRadius: 10
        
    },
    textoLogin: {
        fontSize: 30,
        marginBottom: 30
    },
    texto: {
        fontSize: 20,
        fontWeight: "800",
        marginBottom: 30
    },
    buttonEntrar: {
        backgroundColor: 'lightblue',
        width: "80%",
        height: 60,
        borderRadius: 15,
        marginBottom: 20
    },
    textoEntrar: {
        padding: 15,
        textAlign: "center",
        color: 'black',
        fontSize: 20
    }
});