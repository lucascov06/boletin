import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  

const Archivo = () => {
    return(
  <Text style={styles.subtitle}>¿Ya tienes una cuenta?.</Text>
    );
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  },
  subtitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  },
});
export default Archivo;

export default ArchivoScreen;
