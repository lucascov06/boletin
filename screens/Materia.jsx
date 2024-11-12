import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const data = [
  { id: 'MTA-1', name: 'Matemáticas', project: 'Trigonometria' },
  { id: 'MTA-2', name: 'Ed Física', project: 'Ejercicios' },
  { id: 'MTA-3', name: 'Programacion Web Dinamica', project: 'Diseño de pagina' },
  { id: 'MTA-4', name: 'Seguridad Informatica', project: 'Sistema de seguridad' },
  { id: 'MTA-5', name: 'Química', project: 'Alteracion de quimicos' },
  { id: 'MTA-6', name: 'Lengua y Literatura', project: 'Verbos colectivos' },
  { id: 'MTA-7', name: 'Automatización y Control', project: 'Optimizacion de procesos' },
  { id: 'MTA-8', name: 'Ética y Deontología', project: 'Aristoteles' },
  { id: 'MTA-9', name: 'Tecnología de Redes', project: 'Sistemas de entradas' },
  { id: 'MTA-10', name: 'Organización y Arquitectura', project: 'Numero Hexadecimales' },
  { id: 'MTA-11', name: 'Inglés Técnico', project: 'Nombres de componentes' },
];

export default function BuscarMateriasScreen() {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscar Materias</Text>
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
          <Text style={styles.tabText}>Trimestre 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Trimestre 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Trimestre 3</Text>
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

