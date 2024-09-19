import React from 'react';
import { Text, StyleSheet,} from 'react-native';

const Singin = () => {
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
    },
  });
export default Singin;