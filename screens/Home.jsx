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
                <Text style={styles.buttonText}>Revisa tu Boletin</Text>
                <Text style={styles.subtext}>Hace 24hs se entregó</Text>
            </TouchableOpacity>

            <View style={styles.footer} >
                <Icon name="search" size={28} onPress={navegar}/>
                <Icon name="home" size={28} color="red" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: '#fff'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10, 
    },
    logo: {
        width: 180, 
        height: 80, 
    },
    header: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingVertical: 10 
    },
    perfilImagen: { 
        width: 32, 
        height: 32, 
        borderRadius: 16 
    },
    searchFilterContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 10 
    },
    searchText: { 
        fontSize: 24, 
        fontWeight: 'bold' 
    },
    sortFilter: { 
        flexDirection: 'row' 
    },
    icon: { 
        marginHorizontal: 8 
    },
    categoria: { 
        width: 60, 
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff',
        borderRadius: 30, 
        marginHorizontal: 5,
    },
    categoriaText: { 
        color: 'white', 
        fontSize: 10, 
        textAlign: 'center'
    },
    button: { 
        backgroundColor: '#007bff', 
        padding: 16, 
        borderRadius: 8, 
        alignItems: 'center', 
        marginTop: 10 
    },
    buttonText: { 
        color: '#fff', 
        fontSize: 18 
    },
    subtext: { 
        color: '#fff', 
        fontSize: 12, 
        marginTop: 4 
    },
    footer: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingVertical: 16, 
        borderTopWidth: 1, 
        borderColor: '#ddd' 
    }
});

export default HomeScreen;
