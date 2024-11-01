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
        {['Primer Trimestre', 'Segundo Trimestre', 'Tercer Trimestre', 'Profesores', 'Escuela'].map((item, index) => (
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

