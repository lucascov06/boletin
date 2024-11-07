import React from 'react'; 
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function Trimestre() {
    const navigation = useNavigation(); 

   
    return (
        <View style={styles.container}>
           
           <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Icon name="search" size={28} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Icon name="home" size={28} color="red" />
            </TouchableOpacity>
        </View>


           
            
        </View>
