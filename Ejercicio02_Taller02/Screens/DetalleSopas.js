import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DetalleSopas = ({ route, navigation }) => {
  const { soup } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}></Text>
      <View style={styles.detailsContainer}>
        <Image source={{ uri: soup.fotito }} style={styles.TipImage} /> 
        <Text>
          <Text style={styles.label}> {'\n'}Nombre: </Text>
          {soup.nombre} 
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Descripcion: </Text>
          {soup.Descripcion} 
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Ingredientes:</Text>
          {soup.ingredientes}
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Precio promedio:</Text>
          {soup.precio} 
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Region: </Text>
          {soup.region}
        </Text>
        <Text>
          <Text style={styles.label}>{'\n'}Categoria: </Text>
          {soup.categoria}
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

export default DetalleSopas;
