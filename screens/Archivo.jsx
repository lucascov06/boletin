import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  

const ArchivoScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);  

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Ingrese su Cuenta!</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario o gmail"
                placeholderTextColor="#8A8A8A"
            />
            
            <TextInput
                style={styles.input}
                placeholder="Id boletín"
                placeholderTextColor="#8A8A8A"
            />
            
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Contraseña"
                    placeholderTextColor="#8A8A8A"
                    secureTextEntry={!passwordVisible}  
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Icon
                        name={passwordVisible ? 'eye' : 'eye-slash'}  
                        size={20}
                        color="#8A8A8A"
                    />
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Ingresar</Text>
            </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  },
  subtitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  },
});
export default Archivo;

export default ArchivoScreen;
