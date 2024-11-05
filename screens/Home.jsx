import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
function HomeScreen() {
return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Icon name="menu" size={28} />
        <Image 
        source={{ uri: '/assets/logo.png' }} 
        style={styles.profileImage}
        />
    </View>

    <View style={styles.searchFilterContainer}>
        <Text style={styles.searchText}>Boletin</Text>
        <View style={styles.sortFilter}>
        <Icon name="funnel" size={20} style={styles.icon} />
        <Icon name="options" size={20} style={styles.icon} />
        </View>
    </View>

    <ScrollView horizontal style={styles.categories}>
        {['Tercer Trimestre', 'Profesores', 'Escuela'].map((item, index) => ( // Solo hacemos el ultimo trimestre
        <View key={index} style={styles.category}>
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
    headerTitle: { 
        fontSize: 20, 
        fontWeight: 'bold' 
    },
    profileImage: { 
        width: 32, 
        height: 32, 
        borderRadius: 16 
    },
    searchFilterContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginVertical: 16 },
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
        marginBottom: 14, 
        width: 150, 
    },
    category: { 
        marginHorizontal: 8, 
        padding: 8, 
        backgroundColor: '#e0e0e0', 
        borderRadius: 16 
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

