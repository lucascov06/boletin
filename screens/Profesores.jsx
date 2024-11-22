import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const data = [
  { id: 'PRF-1', name: 'Exequiel Wiedermann', project: 'Programacion Web Dinamica' },
  { id: 'PRF-2', name: 'Jorge Cardenas', project: 'Ed fisica' },
  { id: 'PRF-3', name: 'Agustina Aviles', project: 'Diseño de pagina' },
  { id: 'PRF-4', name: 'Exequiel Wiederman', project: 'Seguridad Informatica' },
  { id: 'PRF-5', name: 'Leandro Solalinde', project: 'Fisica' },
  { id: 'PRF-6', name: 'Juan Pablo Burgos', project: 'Automatización y Control' },
  { id: 'PRF-7', name: 'Santiago Palacios', project: 'Etica Y deontologia' },
  { id: 'PRF-8', name: 'Cristhian Cantero', project: 'Tecnología de Redes' },
  { id: 'PRF-9', name: 'Esteban', project: 'Ingles tecnico' },

];

export default function BuscarProfesoresScreen() {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscar Profesores</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.code}>{item.id}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.project}>{item.project}</Text>
          </View>
        )}
      />
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  filterButton: {
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  code: {
    fontWeight: 'bold',
    width: '20%',
  },
  name: {
    width: '50%',
  },
  project: {
    width: '30%',
    color: '#666',
    textAlign: 'right',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
});

