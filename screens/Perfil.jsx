import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';

const Perfil = ({ navigation }) => {
  const [email, setEmail] = useState('luca.ejemplo@gmail.com');
  const [password, setPassword] = useState('');
  const [codigoId, setCodigoId] = useState('450876');
  const [domicilio, setDomicilio] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');

  const handleSave = () => {
    // Navegar a la pantalla Home
    navigation.navigate('HomeScreen');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        
        <View style={styles.section}>
          <Text style={styles.label}>Detalles Personales</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Ingrese su email"
            placeholderTextColor="#8A8A8A"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#8A8A8A"
            secureTextEntry
          />
          <TouchableOpacity>
            <Text style={styles.changePassword}>Cambiar contraseña</Text>
          </TouchableOpacity>
        </View>

