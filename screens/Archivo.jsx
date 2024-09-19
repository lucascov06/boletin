import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,} from 'react-native';

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
