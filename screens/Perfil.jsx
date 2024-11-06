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

        <View style={styles.section}>
          <Text style={styles.label}>Detalles de ID Académico</Text>
          <TextInput
            style={styles.input}
            value={codigoId}
            onChangeText={setCodigoId}
            placeholder="Ingrese su Código ID"
            placeholderTextColor="#8A8A8A"
          />
          <TextInput
            style={styles.input}
            value={domicilio}
            onChangeText={setDomicilio}
            placeholder="Ingrese su domicilio"
            placeholderTextColor="#8A8A8A"
          />

          <Picker
            selectedValue={ciudad}
            style={[styles.picker, ciudad === '' && { color: '#8A8A8A' }] }
            onValueChange={(itemValue) => setCiudad(itemValue)}
          >
            <Picker.Item label="Seleccione ciudad" value="" color="#8A8A8A" />
            <Picker.Item label="Neuquén" value="Neuquén" />
            <Picker.Item label="Cipolletti" value="Cipolletti" />
            <Picker.Item label="Centenario" value="Centenario" />
            <Picker.Item label="Plottier" value="Plottier" />
          </Picker>

          <Picker
            selectedValue={pais}
            style={[styles.picker, pais === '' && { color: '#8A8A8A' }] }
            onValueChange={(itemValue) => setPais(itemValue)}
          >
            <Picker.Item label="Seleccione país" value="" color="#8A8A8A" />
            <Picker.Item label="Argentina" value="Argentina" />
            <Picker.Item label="Chile" value="Chile" />
            <Picker.Item label="Brasil" value="Brasil" />
          </Picker>
        </View>

