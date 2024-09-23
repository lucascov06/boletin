import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Contraseña() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); 
  const handlePasswordReset = () => {
    console.log('Email para restablecer la contraseña:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Olvidó su Contraseña?</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.description}>
        Le enviaremos un mensaje para configurar o restablecer su nueva contraseña.
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
