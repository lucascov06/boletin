import React from 'react'; 
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();

    const navegar = () => {
        navigation.navigate('Materia');
    };

    const handlecategoriaPress = (categoria) => {
        if (categoria === 'Tercer Trimestre') {
            navigation.navigate('TercerTrimestre');
        } else if (categoria === 'Profesores') {
            navigation.navigate('ProfesoresScreen');
        } else if (categoria === 'Escuela') {
            
            Linking.openURL('https://epet20.edu.ar/');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo.png')} 
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.header}>
                <Icon name="menu" size={28} />
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Image 
                        source={{ uri: '/assets/perfil.png' }} 
                        style={styles.perfilImagen}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.searchFilterContainer}>
                <Text style={styles.searchText}>Boletin</Text>
                <View style={styles.sortFilter}>
                    <Icon name="funnel" size={20} style={styles.icon} />
                    <Icon name="options" size={20} style={styles.icon} />
                </View>
            </View>

            <ScrollView horizontal style={styles.a} contentContainerStyle={{ flexGrow: 1 }}>
                {['Tercer Trimestre', 'Profesores', 'Escuela'].map((item, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={styles.categoria} 
                        onPress={() => handlecategoriaPress(item)}
                    >
                        <Text style={styles.categoriaText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TercerTrimestre')}>
                <Text style={styles.buttonText}>Visualizar boletines</Text>
                <Text style={styles.subtext}>Hace 24hs se envio</Text>
            </TouchableOpacity>

            <View style={styles.footer} >
                <Icon name="search" size={28} onPress={navegar}/>
                <Icon name="home" size={28} color="red" />
            </View>
        </View>
    );
}
