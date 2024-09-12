import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      <Text style={styles.title}>Un espacio seguro para verificar tu trayectoria académica.</Text>

      <Text style={styles.subtitle}>¿Ya tienes una cuenta?.</Text>

      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

    <Text style={styles.subtitle}>¿No tienes cuenta?</Text>


      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonTeacher}>
        <Text style={styles.buttonTextTeacher}>Ingresar como profesor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 209, 
    height: 53, 
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    color: '#E95F8B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },

  subtitle: {
    fontSize: 14,
    color: '#00000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  buttonPrimary: {
    backgroundColor: '#E95F8B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonSecondary: {
    backgroundColor: '#E95F8B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTeacher: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    margin:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonTextTeacher: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;