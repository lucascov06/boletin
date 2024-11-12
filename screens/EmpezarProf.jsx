import React from 'react';
import { View, Text, Image, StyleSheet, Pressable,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeProf from '../screens/HomeProf.jsx';
import signin2 from '../screens/singin2.jsx';
const Empezar = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Image source={require('../assets/fondo-pantalla-empezar.png')} style={styles.image} />
        
        <View style={styles.overlay}>
        <View style={styles.header}>
        </View>
  
          <Text style={styles.texto}>¡Ya puedes ver y actualizar la información Académica!</Text>
  
          <Pressable
            style={styles.boton} 
            onPress={() => navigation.navigate('HomeProf')}
          >
            <Text style={styles.textoBoton}>Empezar</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    overlay: {
      justifyContent: 'center',
      alignItems: 'center',
    },
   
    texto: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 100, 
    },
    boton: {
      backgroundColor: '#E95F8B',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      width: '80%',
      marginTop: 100,
    },
    
    textoBoton: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  export default Empezar;