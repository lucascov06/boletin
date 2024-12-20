import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Picker, Image, Modal } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const Perfil = ({ navigation }) => {
  const [email, setEmail] = useState('ejemploluca@gmail.com');
  const [password, setPassword] = useState('ejemplo');
  const [codigoId, setCodigoId] = useState('450876');
  const [domicilio, setDomicilio] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = () => {
    navigation.navigate('HomeScreen');
  };

  const handleCambiarContraseña = () => {
    navigation.navigate('NuevaContrasena');
  };

  const handleLogout = () => {
    setModalVisible(true); 
  };

  const confirmLogout = () => {
    setModalVisible(false);
    navigation.navigate('Login'); 
  };

  const cancelLogout = () => {
    setModalVisible(false); 
  };

  const selectProfileImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('usuario cancelo ImagePicker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Perfil</Text>

        {/* Imagen de perfil */}
        <TouchableOpacity onPress={selectProfileImage}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../assets/perfil.png')}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.label}>Detalles Personales</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Ingrese su email"
            placeholderTextColor="#8A8A8A"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Ingrese su contraseña"
            placeholderTextColor="#8A8A8A"
            secureTextEntry
          />
           <TouchableOpacity style={styles.changepasswordButton} onPress={handleCambiarContraseña}>
          <Text style={styles.changepasswordButtonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Detalles de ID Académico</Text>
          <TextInput
            style={styles.input}
            value={codigoId}
            onChangeText={setCodigoId}
            placeholder="Ingrese su Código ID"
            placeholderTextColor="#8A8A8A"
          />
          <TextInput
            style={styles.input}
            value={domicilio}
            onChangeText={setDomicilio}
            placeholder="Ingrese su domicilio"
            placeholderTextColor="#8A8A8A"
          />

          <Picker
            selectedValue={ciudad}
            style={[styles.picker, ciudad === '' && { color: '#8A8A8A' }] }
            onValueChange={(itemValue) => setCiudad(itemValue)}
          >
            <Picker.Item label="Seleccione ciudad" value="" color="#8A8A8A" />
            <Picker.Item label="Neuquén" value="Neuquén" />
            <Picker.Item label="Cipolletti" value="Cipolletti" />
            <Picker.Item label="Centenario" value="Centenario" />
            <Picker.Item label="Plottier" value="Plottier" />
          </Picker>

          <Picker
            selectedValue={pais}
            style={[styles.picker, pais === '' && { color: '#8A8A8A' }] }
            onValueChange={(itemValue) => setPais(itemValue)}
          >
            <Picker.Item label="Seleccione país" value="" color="#8A8A8A" />
            <Picker.Item label="Argentina" value="Argentina" />
            <Picker.Item label="Chile" value="Chile" />
            <Picker.Item label="Brasil" value="Brasil" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>

        
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={cancelLogout}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>¿Seguro que quiere cerrar su sesión?</Text>
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity style={styles.modalButton} onPress={confirmLogout}>
                  <Text style={styles.modalButtonText}>Cerrar Sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={cancelLogout}>
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  changepasswordButton: {
    padding: 5,
    alignItems: 'right',
    
  },
  changepasswordButtonText: {
    color: '#F0466D',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#FF5A5F',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Perfil;
