import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,} from 'react-native';

const Singinprofesor = () => {
  return(
  <Text style={styles.subtitle}>Crear cuenta.</Text>
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
    color:'#E95F8B'
    },
  });
export default Singinprofesor;