import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

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
