import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Perfil from './Perfil';

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="menu" size={28} />
                
                {/* Envolver la imagen de perfil en TouchableOpacity */}
                <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                    <Image 
                        source={{ uri: '/assets/logo.png' }} 
                        style={styles.profileImage}
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

            <ScrollView horizontal style={styles.categories} contentContainerStyle={{ flexGrow: 1}}>
                {['Tercer Trimestre', 'Profesores', 'Escuela'].map((item, index) => (
                    <View key={index} style={[styles.category, {backgroundColor: '#FFD700', marginHorizontal:10}]}>
                        <Text>{item}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.card}>
                <Image
                    source={{ uri: '/assets/logo.png' }}
                    style={styles.cardImage}
                />
                <Text style={styles.cardText}>Con Esfuerzo se Logran Resultados</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Revisa tu Boletin</Text>
                <Text style={styles.subtext}>Hace 24hs se entregó</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Icon name="search" size={28} />
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
    header: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: 16 
    },
    profileImage: { 
        width: 32, 
        height: 32, 
        borderRadius: 16 
    },
    searchFilterContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 16 
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
    categories: { 
        flexDirection: 'row', 
        backgroundColor: '#f5f5f5',
        paddingHorizontal:10,
    },
    category: { 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        padding: 20,
        borderRadius: 10,
    },
    card: { 
        alignItems: 'center', 
        marginBottom: 16 
    },
    cardImage: { 
        width: '20%', 
        height: 65, 
        borderRadius: 16, 
        position: 'relative', 
        top: -330 
    },
    cardText: { 
        position: 'absolute', 
        color: 'white', 
        fontSize: 20, 
        fontWeight: 'bold', 
        top: '40%' 
    },
    button: { 
        backgroundColor: '#007bff', 
        padding: 16, 
        borderRadius: 8, 
        alignItems: 'center' 
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
