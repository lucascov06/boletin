import React from 'react';
import { View, Text, Image, StyleSheet, Pressable,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeProf from '../screens/HomeProf.jsx';
import signin2 from '../screens/singin2.jsx';
const Empezar = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <Image source={require('../assets/fondo-pantalla-empezar.png')} style={styles.image} />
        
        <View style={styles.overlay}>
        <View style={styles.header}>
        </View>
  
          <Text style={styles.texto}>¡Ya puedes ver y actualizar la información Académica!</Text>
  
          <Pressable
            style={styles.boton} 
            onPress={() => navigation.navigate('HomeProf')}
          >
            <Text style={styles.textoBoton}>Empezar</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  
