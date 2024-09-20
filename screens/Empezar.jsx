import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Empezar = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/fondo-pantalla-empezar.png')} style={styles.image} />
      <Text style={styles.titulo}>Tu Boletín</Text>
      <Text style={styles.texto}>Ya puedes ver tu información académica!</Text>

      
    </View>
  );
};
