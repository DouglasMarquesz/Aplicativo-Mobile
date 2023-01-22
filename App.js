import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TextComponent} from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  return (
      <SafeAreaView>
        {/*CABEÇALHO DO APLICATIVO*/}
        <View style={styles.header}>
        <Image
          source={require('./assets/before.png')}
          style={{width: 32, height: 32}}
          resizeMode='contain'
          />
        <Text style={{fontSize: 22}}>
          USINAGEM
        </Text>
        <Image
          source={require('./assets/next.png')}
          style={{width: 32, height: 32}}
          resizeMode='contain'
          />
        </View>
        <Image
          source={require('./assets/aba_principal.jpg')}
          style={{justifyContent: 'center', paddingBottom: 25,}}
          resizeMode='contain'
          />
      <ScrollView style={styles.container}>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Parâmetros de Usinagem
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Trigonometria
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Informações de Pastilhas
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Calculos
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Códigos M e G
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Calculos
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Calculos
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
        <View style={styles.opcoesMenu}>
          <Image source={require('./assets/gear.png')} style={styles.imgIcon}/> 
            <Text style={{fontSize: 16, paddingTop: 8,}}>
             Calculos
            </Text>
            <Image source={require('./assets/next.png')} style={styles.imgIcon}/>
        </View>
      </ScrollView>

      </SafeAreaView>
    //<View style={styles.container}>
    //  <StatusBar style="auto" />
    //</View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#F2F2F2',
    alightItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
    borderBottonWidht: 2,
    borderBottomColor: 'FFF',
    textAlign: 'center',
  },
  opcoesMenu:{
    backgroundColor: '#E1E1E1',
    alightItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    borderRadius: 8,
    margin: 5,
  },
  imgIcon:{
    height: 40,
    width: 40,
  }
});
