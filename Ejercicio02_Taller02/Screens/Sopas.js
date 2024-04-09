import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaSopas from './ListaSopas';
import DetalleSopas from './DetalleSopas'; 
const Stack = createStackNavigator();
const Sopas = () => {
  return (
    <Stack.Navigator initialRouteName="Sopas">
      <Stack.Screen name="Sopas" component={ListaSopas} options={{
        headerShown: false
      }} />
      <Stack.Screen name="DetalleSopas" component={DetalleSopas} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
};
export default Sopas;
