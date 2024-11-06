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

