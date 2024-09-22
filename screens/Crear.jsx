import React, { useState } from 'react';
import { View, Text,Pressable, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  
import { useNavigation } from '@react-navigation/native';
import Empezar from './Empezar';

const Crear = () => {
  const navigation = useNavigation(); 
    const [passwordVisible, setPasswordVisible] = useState(false);  
   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Cree una Cuenta!</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario o gmail"
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

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Confirmar Contraseña"
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
            
           
            <Text style={styles.tex}>Al hacer click en el boton Registrarse,acepta la oferta publica.</Text>


            
            

         <Pressable 
         style={styles.loginButton}onPress={() => navigation.navigate('Empezar')}>
        <Text style={styles.loginButtonText}>Ingresar</Text>
      </Pressable>

            <Text style={styles.orText}>- O continuar con -</Text>

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

            <Pressable >
                <Text style={styles.signUpText}onPress={() => navigation.navigate('singin')}>Crea una cuenta <Text style={styles.signUpLink}>Sign Up</Text></Text>
             </Pressable>
            
          
        </View>
    );
};

