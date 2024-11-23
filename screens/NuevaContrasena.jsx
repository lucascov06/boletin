import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Contrasena() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); 
  const handlePasswordReset = () => {
    console.log('Email para restablecer la contraseña:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Quiere cambiar su Contraseña?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.description}>
        Le enviaremos un mensaje para configurar su nueva contraseña.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Entregar</Text>
      </TouchableOpacity>
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF4B5C',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
