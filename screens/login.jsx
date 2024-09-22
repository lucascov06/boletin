import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Archivo from './Archivo';
import Singin from '../singin';
import Singinprofesor from '../singin2';
const LoginScreen = () => {

  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      
      <Text style={styles.title}>Un espacio seguro para verificar tu trayectoria académica.</Text>

      <Text style={styles.subtitle}>¿Ya tienes una cuenta?.</Text>
      <Pressable 
        style={styles.buttonPrimary}onPress={() => navigation.navigate('Archivo')}// Agrega la navegación al presionar el botón
        >
<Text style={styles.buttonText}>Ingresar</Text>

</Pressable>

    <Text style={styles.subtitle}>¿No tienes cuenta?</Text>


      <Pressable style={styles.buttonSecondary}onPress={() => navigation.navigate('Crear')}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </Pressable>

      <Pressable style={styles.buttonTeacher}onPress={() => navigation.navigate('Singinprofesor')}>
        <Text style={styles.buttonTextTeacher}>Ingresar como profesor</Text>
      </Pressable>
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
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonSecondary: {
    backgroundColor: '#E95F8B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonTeacher: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    margin:20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextTeacher: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;