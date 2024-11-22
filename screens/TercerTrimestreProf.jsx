import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Modal, 
  TextInput 
} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';

function Trimestre() {
    const [images, setImages] = useState([
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
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalVisible, setModalVisible] = useState(false);
    const [editingText, setEditingText] = useState(false);
    const [newText, setNewText] = useState(images[currentIndex].text);
    const [changingImage, setChangingImage] = useState(false); // Estado para cambiar imagen

    // Función para seleccionar una imagen con Image Picker
    const pickImage = (callback) => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                Alert.alert('Cancelar', 'No seleccionaste ninguna imagen.');
            } else if (response.errorCode) {
                Alert.alert('Error', 'Hubo un problema seleccionando la imagen.');
            } else {
                const { uri } = response.assets[0];
                callback(uri);
            }
        });
    };

    // Añadir una nueva imagen
    const handleAdd = () => {
        pickImage((uri) => {
            const newBoletin = {
                source: { uri },
                text: `Nuevo boletín ${images.length + 1}`,
            };
            setImages([...images, newBoletin]);
            Alert.alert('Añadir', 'Se ha añadido un nuevo boletín.');
        });
    };

    // Leer (Abrir la imagen en un modal)
    const handleRead = () => {
        setModalVisible(true);
    };

    // Modificar la imagen y el texto del boletín actual
    const handleUpdate = () => {
        // Si ya está en modo de edición, desactivamos
        if (editingText) {
            setEditingText(false); // Dejar de editar el texto
            setChangingImage(false); // Dejar de cambiar la imagen
        } else {
            // Si no está en modo de edición, habilitamos
            setEditingText(true); // Iniciar edición del texto
            setChangingImage(true); // Permitir cambio de imagen
        }
    };

    // Función para actualizar texto
    const handleUpdateText = () => {
        const updatedImages = [...images];
        updatedImages[currentIndex].text = newText;
        setImages(updatedImages);
        setEditingText(false); // Dejar de editar después de actualizar el texto
        Alert.alert('Actualizar', 'Se ha actualizado el nombre del boletín.');
    };

    // Función para actualizar la imagen
    const handleUpdateImage = () => {
        pickImage((uri) => {
            const updatedImages = [...images];
            updatedImages[currentIndex].source = { uri }; // Cambiar imagen
            setImages(updatedImages);
            setChangingImage(false); // Dejar de cambiar la imagen
            Alert.alert('Actualizar', 'Se ha actualizado la imagen del boletín.');
        });
    };

    // Eliminar el boletín actual
    const handleDelete = () => {
        if (images.length === 1) {
            Alert.alert('Eliminar', 'No puedes eliminar el último boletín.');
            return;
        }

        const updatedImages = images.filter((_, index) => index !== currentIndex);
        setImages(updatedImages);
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1)); // Ajustar el índice actual
        Alert.alert('Eliminar', 'Se ha eliminado el boletín actual.');
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <View style={styles.container}>
            {editingText ? (
                <TextInput
                    style={styles.input}
                    value={newText}
                    onChangeText={setNewText}
                    onBlur={handleUpdateText}
                    onSubmitEditing={handleUpdateText}
                />
            ) : (
                <Text style={styles.imageText}>{images[currentIndex].text}</Text>
            )}

            <View style={styles.crudButtons}>
                <TouchableOpacity 
                    style={[styles.crudButton, styles.addButton]} 
                    onPress={handleAdd}
                >
                    <Icon name="add" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.crudButton, styles.readButton]} 
                    onPress={handleRead}
                >
                    <Icon name="eye" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.crudButton, styles.updateButton]} 
                    onPress={handleUpdate} // Activar tanto la edición del texto como de la imagen
                >
                    <Icon name="pencil" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.crudButton, styles.deleteButton]} 
                    onPress={handleDelete}
                >
                    <Icon name="trash" size={20} color="#fff" />
                </TouchableOpacity>
            </View>

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

            {/* Si está cambiando la imagen, permitir seleccionar una nueva imagen */}
            {changingImage && (
                <View style={styles.changeImageContainer}>
                    <TouchableOpacity 
                        style={styles.changeImageButton} 
                        onPress={handleUpdateImage}
                    >
                        <Text style={styles.changeImageText}>Cambiar Imagen</Text>
                    </TouchableOpacity>
                </View>
            )}

            <Modal visible={isModalVisible} transparent={true}>
                <View style={styles.modalContainer}>
                    <Image 
                        source={images[currentIndex].source}
                        style={styles.modalImage}
                        resizeMode="contain"
                    />
                    <TouchableOpacity 
                        style={styles.closeButton} 
                        onPress={() => setModalVisible(false)}
                    >
                        <Icon name="close" size={28} color="#fff" />
                    </TouchableOpacity>
                </View>
            </Modal>
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
    crudButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    crudButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    addButton: {
        backgroundColor: '#FFD700',
    },
    readButton: {
        backgroundColor: '#32CD32',
    },
    updateButton: {
        backgroundColor: '#007BFF',
    },
    deleteButton: {
        backgroundColor: '#FF0000',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: '90%',
        height: '70%',
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: '80%',
        marginBottom: 20,
        borderRadius: 5,
    },
    changeImageContainer: {
        marginTop: 20,
    },
    changeImageButton: {
        backgroundColor: '#32CD32',
        padding: 10,
        borderRadius: 5,
    },
    changeImageText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Trimestre;
