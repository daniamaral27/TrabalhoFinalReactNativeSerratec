import { Text, View, Image, TouchableOpacity,   } from 'react-native'
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export const CardProdutos = ({item}) =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <TouchableOpacity  style={styles.cardContainer} onPress={() => navigation.navigate('Detalhes', {item})}>
            <Card style={styles.container}>
            <Card.Content>
            <Card.Cover  source={{uri: item.imagem }} />
            <View style={styles.textos}>
            <Title style={styles.nome}>{item.nome}</Title>
            <Title style={styles.valor}>R${item.valor}</Title>
            </View>
            </Card.Content>
            </Card>
        </TouchableOpacity>
        </View>
    );
}