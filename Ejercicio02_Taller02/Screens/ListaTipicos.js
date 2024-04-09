import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, TextInput } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const ListaTipicos = ({ navigation }) => {
  const [typicals, setTypicals] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchTypicals();
  }, []);

  const fetchTypicals = async () => {
    try {
      const response = await fetch('https://6612fa6b53b0d5d80f66ae10.mockapi.io/Taller02/Tipicos');
      const data = await response.json();
      setTypicals(data);
    } catch (error) {
      console.error('Error fetching Typicals:', error);
    }
  };
   
  const filteredTypicals = typicals.filter(item => {
    return item.nombre.toLowerCase().includes(searchText.toLowerCase());
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetalleTipicos', { typical: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.fotito }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.nombre}</Text>
          <Text style={styles.name2}>{item.nombre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setSearchText(text)}
        value={searchText}
        placeholder="Buscar..."
      />
      <FlatList
        data={filteredTypicals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name2: {
    fontSize: 14,
    color: 'gray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default ListaTipicos;
