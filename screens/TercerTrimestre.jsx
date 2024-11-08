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
    const [currentIndex, setCurrentIndex] = useState(0); // Controla la imagen y el texto actual
    const navigation = useNavigation(); 

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia a la siguiente imagen
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Cambia a la imagen anterior
    };

    return (
        <View style={styles.container}>
            
            {/* Texto de la imagen actual */}
            <Text style={styles.imageText}>{images[currentIndex].text}</Text>



           
            
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
