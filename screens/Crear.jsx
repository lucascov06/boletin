import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  
import { useNavigation } from '@react-navigation/native';
import { db } from '../Crud/firebaseConfig'; // Importar la configuración de Firebase
import { collection, addDoc } from "firebase/firestore"; // Importar funciones de Firestore

const Crear = () => {
    const [lucaprueba, setUsername] = useState(""); // Crear estado para el username
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); // Controlar visibilidad de la contraseña
    const navigation = useNavigation(); // Usar navegación

    // Función para guardar datos en Firestore
    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
            return;
        }
        try {
            await addDoc(collection(db, "users"), {
                username: lucaprueba,
                password: password, // Guarda la contraseña ingresada por el usuario
            });
            Alert.alert("Registro exitoso", "¡Tu cuenta ha sido creada!");
            navigation.navigate('Empezar'); // Navegar a la pantalla 'Empezar'
        } catch (error) {
            Alert.alert("Error", "Hubo un problema al registrar tu cuenta.");
            console.error("Error al guardar el usuario: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Cree una Cuenta!</Text>

            {/* Campo para el nombre de usuario */}
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario o gmail"
                placeholderTextColor="#8A8A8A"
                value={lucaprueba} // Usar el estado lucaprueba
                onChangeText={setUsername} // Actualizar el estado
            />

            {/* Campo para la contraseña */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Contraseña"
                    placeholderTextColor="#8A8A8A"
                    secureTextEntry={!passwordVisible} // Controlar visibilidad
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Icon
                        name={passwordVisible ? 'eye' : 'eye-slash'}  
                        size={20}
                        color="#8A8A8A"
                    />
                </TouchableOpacity>
            </View>

            {/* Campo para confirmar la contraseña */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Confirmar Contraseña"
                    placeholderTextColor="#8A8A8A"
                    secureTextEntry={!passwordVisible}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Icon
                        name={passwordVisible ? 'eye' : 'eye-slash'}  
                        size={20}
                        color="#8A8A8A"
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.tex}>
                Al hacer click en el botón Registrarse, acepta la oferta pública.
            </Text>

            {/* Botón para registrarse */}
            <Pressable 
                style={styles.loginButton}
                onPress={handleRegister} // Llamar a la función al presionar
            >
                <Text style={styles.loginButtonText}>Ingresar</Text>
            </Pressable>
            
            <Text style={styles.orText}>- O continuar con -</Text>

            {/* Botones sociales */}
            <View style={styles.socialButtons}>
                <TouchableOpacity>
                    <Image
                        style={styles.socialIcon}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/640px-Google_%22G%22_logo.svg.png' }} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.socialIcon}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }} 
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.socialIcon}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }} 
                    />
                </TouchableOpacity>
            </View>

            <Pressable>
                <Text style={styles.signUpText} onPress={() => navigation.navigate('Archivo')}>
                    Ya tengo una cuenta <Text style={styles.signUpLink}>Acceso</Text>
                </Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
  tex: {
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#C7C7CD',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#C7C7CD',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,  
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0466D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#8A8A8A',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain', 
  },
  signUpText: {
    fontSize: 14,
    color: '#8A8A8A',
  },
  signUpLink: {
    color: '#F0466D',
  },
});

export default Crear;
