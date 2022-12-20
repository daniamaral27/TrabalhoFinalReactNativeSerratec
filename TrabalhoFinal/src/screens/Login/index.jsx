import { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AuthContext from "../../contexts/AuthContext";
import { styles } from "./styles";
import { Entypo   } from "@expo/vector-icons";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passHide, setPasshide] = useState(true);
  const { loginContext } = useContext(AuthContext);

  const handleLogin = async () => {
    if (userName != "" && password != "") {
      loginContext(userName, password);
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <TouchableWithoutFeedback>
    <View style={styles.container}>
      <Text style={styles.textoLogin}>Login</Text>
      <Text style={styles.texto}>Já possui uma conta?</Text>
      <TextInput
        style={styles.textImput}
        placeholder="    DIGITE SEU E-MAIL"
        onChangeText={setUserName}
        value={userName}
      />
      <TextInput
        style={styles.textImput}
        placeholder="    DIGITE SUA SENHA"
        onChangeText={(texto)=> setPassword(texto)}
        value={password}
        secureTextEntry={passHide}
      />
      <TouchableOpacity
        style={styles.buttonEntrar}
        onPress={() => handleLogin()}
      >
        <Text style={styles.textoEntrar}>Entrar</Text>
      </TouchableOpacity>
    </View>


    </TouchableWithoutFeedback>
  );
};
export default Login;
