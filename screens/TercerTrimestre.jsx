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
    const [currentIndex, setCurrentIndex] = useState(0); 
    const navigation = useNavigation(); 

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
    };

    return (
        <View style={styles.container}>
            
            
            <Text style={styles.imageText}>{images[currentIndex].text}</Text>

            
            <View style={styles.logoContainer}>
                <Image 
                    source={images[currentIndex].source}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            
            <View style={styles.controls}>
                <TouchableOpacity onPress={handlePrev}>
                    <Icon name="arrow-back" size={28} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNext}>
                    <Icon name="arrow-forward" size={28} />
                </TouchableOpacity>
            </View>

            
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
        backgroundColor: '#fff', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    imageText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    logoContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 30,
    },
    logo: {
        width: 200, 
        height: 200, 
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: 20,
    },
    footer: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        paddingVertical: 20, 
        borderTopWidth: 1, 
        borderColor: '#ddd', 
        backgroundColor: '#fff',
    }
});

export default Trimestre;
