import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/Home.jsx';
const Empezar = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Image source={require('../assets/fondo-pantalla-empezar.png')} style={styles.image} />
        
        <View style={styles.overlay}>
        <View style={styles.header}>
        </View>
  
          <Text style={styles.texto}>¡Ya puedes ver tu información Académica!</Text>
  
          <Pressable
            style={styles.boton} 
            onPress={() => navigation.navigate('HomeScreen')}
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
      marginTop: 100, // Ajusta este valor para mover el botón más abajo
    },
    
    textoBoton: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  export default Empezar;