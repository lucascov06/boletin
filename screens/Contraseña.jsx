import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    // Aquí manejarás el envío del correo para restablecer la contraseña
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
  );
}
