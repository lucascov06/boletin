import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Image, Icon } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Singinprofesor = () => {
  const [email, setEmail] = useState('');
  const [idProfesor, setidProfesor] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email === 'thiagoejemplo@gmail.com' && idProfesor === '3312') {
      navigation.navigate('Archivo');
    } else {
      setError('Id o usuario incorrectos ingreselos nuevamente');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Ingrese su cuenta de profesor!</Text>

      <TextInput
        style={styles.input}
        placeholder='Correo electrónico'
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor= "#8A8A8A"

      />
      <TextInput
        style={styles.input}
        placeholder='Id del profesor'
        secureTextEntry={true}
        value={idProfesor}
        onChangeText={(text) => setidProfesor(text)}
        placeholderTextColor= "#8A8A8A"
        
      />
      {error && <Text style={styles.error}>{error}</Text>}

      <Pressable onPress={() => {/* Manejar recuperación de contraseña */}}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </Pressable>

      <Text style={styles.orText}>- O continuar con -</Text>

      <View style={styles.socialButtons}>
                <Pressable>
                    <Image
                        style={styles.socialIcon}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png' }} 
                    />
                </Pressable>
                <Pressable>
                    <Image
                        style={styles.socialIcon}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }} 
                    />
                </Pressable>
                <Pressable>
                    <Image
                        style={styles.socialIcon}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }} 
                    />
                </Pressable>

            </View>
      


      <View>
      <Text style={styles.signUpText}>Crea una Cuenta.
        
        </Text>
      

      <Pressable onPress={() => navigation.navigate('Crear')}>
        <Text style={styles.signUpLink}>Sign Up</Text>
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
    backgroundColor: '#fff',
    paddingHorizontal: 20,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
},
input: {
    width: '100%',
    height: 50,
    borderColor: '#C7C7CD',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
},
passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#C7C7CD',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
},
passwordInput: {
    flex: 1,  
},
forgotPassword: {
    alignSelf: 'flex-end',
    color: '#F46D6D',
    marginBottom: 30,
},
loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0466D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
},
loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
},
orText: {
    fontSize: 14,
    color: '#8A8A8A',
    marginBottom: 20,
},
error:{
 color: 'red',
},
socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
},
socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain', 
},
signUpText: {
    fontSize: 14,
    color: '#8A8A8A',
},
signUpLink: {
    color: '#F0466D',
},
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Singinprofesor;