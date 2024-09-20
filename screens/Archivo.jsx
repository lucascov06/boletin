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

            <TouchableOpacity>
                <Text style={styles.signUpText}>Crea una cuenta <Text style={styles.signUpLink}>Sign Up</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
    forgotPassword: {
        alignSelf: 'flex-end',
        color: '#F46D6D',
        marginBottom: 30,
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

export default ArchivoScreen;
