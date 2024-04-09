import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetalleCarneMarisco = ({ route, navigation }) => {
  const { meatSeafood } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}></Text>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: meatSeafood.fotito }} style={styles.TipImage} />
        <Text>
          <Text style={styles.label}> {'\n'}Nombre: </Text>
          {meatSeafood.nombre}
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Descripcion: </Text>
          {meatSeafood.descripcion}
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Ingredientes:</Text>
          {meatSeafood.ingredientes}
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Precio estimado:</Text>
          {meatSeafood.precio} 
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Region: </Text>
          {meatSeafood.region}
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Categoria: </Text>
          {meatSeafood.categoria}
        </Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    alignSelf: 'center',
  },
  TipImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderColor: '#000000',
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 20,
    margin: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    backgroundColor: '#828282',
    top: 20,
    left: 20,
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DetalleCarneMarisco;
