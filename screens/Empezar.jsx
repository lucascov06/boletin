import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Empezar = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/fondo-pantalla-empezar.png')} style={styles.image} />
      <Text style={styles.titulo}>Tu Boletín</Text>
      <Text style={styles.texto}>Ya puedes ver tu información académica!</Text>

      
      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>Empezar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0', // Color de fondo
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
    texto: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 10,
    },
    boton: {
      backgroundColor: '#E95F8B',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '10%',
      alignItems: 'center',
      marginBottom: 15,
    },
    textoBoton: {
      color: 'white',
      fontWeight: 'bold',
    },
  });


export default Empezar;
