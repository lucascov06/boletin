import React from 'react'; 
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react'; 
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';

const images = [
  { 
    source: require('../assets/boletin.jpg'),
    text: 'Primer trimestre',
  },
  { 
    source: require('../assets/boletin2.jpg'),
    text: 'Segundo trimestre',
  },
  { 
    source: require('../assets/boletin3.jpg'),
    text: 'Tercer trimestre',
  }
];

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

            
  
      


    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: '#fff'
    },
    footer: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingVertical: 16, 
        borderTopWidth: 1, 
        borderColor: '#ddd' 
    }
});

export default Trimestre;
