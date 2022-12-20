import { 
  View, 
  Image, 
  Text, 
  ScrollView,
  TouchableOpacity } from "react-native";
import { styles } from '../Home/styles'

import banner_1 from '../../assets/banner-1.png'
import banner_2 from '../../assets/banner-2.png'
import banner_3 from '../../assets/banner-3.png'
import frete from '../../assets/frete.png'
import pix from '../../assets/pix.png'
import cartao from '../../assets/cartao.png'
import seguranca from '../../assets/seguranca.png'
import marcas_1 from '../../assets/minimelissa.png'
import marcas_2 from '../../assets/molequinha.png'
import marcas_3 from '../../assets/elian.png'
import marcas_4 from '../../assets/kyly.png'


export const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoTopo}>A melhor loja de roupas de bebê da região serrana!</Text>
      </View>
        <TouchableOpacity onPress={() => navigation.navigate('Produtos')}>
          <Image source={banner_1} style={styles.banner} />
        </TouchableOpacity>

      <View style={styles.imagens}>
        <Image source={banner_2} style={styles.banner2}/>
        <Image source={banner_3} style={styles.banner2}/>
      </View>

      <View style={styles.container2}>
        <View style={styles.bloco}>
          <Image source={frete} style={styles.frete}></Image>
          <Text style={styles.texto}>Frete grátis</Text>
          <Image source={pix} style={styles.pix}></Image>
          <Text style={styles.texto}>3% desconto no PIX</Text>
        </View>
        
        <View style={styles.bloco}>
            <Image source={cartao} style={styles.cartao}></Image>
            <Text style={styles.texto}>Até 6x sem juros</Text>
            <Image source={seguranca} style={styles.seguranca}></Image>
            <Text style={styles.texto}>Compra segura</Text>
        </View>
      </View>

      <View>
        <Text style={styles.textoMarca}>Marcas</Text>
      </View>

      <View style={styles.container3}>
        <View style={styles.coluna_marcas}>
          <View style={styles.circulo}>
            <Image source={marcas_1} style={styles.marcas1}></Image>
          </View>

          <View style={styles.circulo}>
            <Image source={marcas_2} style={styles.marcas2}></Image>
          </View>
        </View>

        <View style={styles.coluna_marcas}>
          <View style={styles.circulo}>
            <Image source={marcas_3} style={styles.marcas}></Image>
          </View>

          <View style={styles.circulo}>
            <Image source={marcas_4} style={styles.marcas}></Image>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

