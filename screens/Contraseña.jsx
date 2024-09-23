import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Contraseña() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); 
  const Contraseña = () => {
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
      <TouchableOpacity style={styles.button} onPress={Contraseña}>
        <Text style={styles.buttonText}>Entregar</Text>
      </TouchableOpacity>
      

      <Pressable onPress={() => {'Contraseña'}}>
      <Text style={styles.signUpText}> ¿Olvidaste tu contraseña? <Text style={styles.signUpLink}>Sign Up</Text></Text>
      </Pressable>
    </View>
  );
}
