import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const data = [
  { id: 'FIG-121', name: 'Matemáticas', project: 'Acme GTI' },
  { id: 'FIG-122', name: 'Ed Física', project: 'Website Launch' },
  { id: 'FIG-123', name: 'Programacion Web Dinamica', project: 'Design beta' },
  { id: 'FIG-124', name: 'Seguridad Informatica', project: 'Bug fixes' },
  { id: 'FIG-125', name: 'Química', project: 'Bug fixes' },
  { id: 'FIG-126', name: 'Lengua y Literatura', project: 'Website Launch' },
  { id: 'FIG-127', name: 'Automatización y Control', project: 'Bug fixes' },
  { id: 'FIG-128', name: 'Ética y Deontología', project: 'Acme GTI' },
  { id: 'FIG-129', name: 'Tecnología de Redes', project: 'Website Launch' },
  { id: 'FIG-130', name: 'Organización y Arquitectura', project: 'Design beta' },
  { id: 'FIG-131', name: 'Inglés Técnico', project: 'Design beta' },
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
