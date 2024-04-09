import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaCarneMarisco from './ListaCarneMarisco';
import DetalleCarneMarisco from './DetalleCarneMarisco';
const Stack = createStackNavigator();
const CarneMarisco = () => {
return (
<Stack.Navigator initialRouteName="CarneMarisco">
<Stack.Screen name="CarneMarisco" component={ListaCarneMarisco} options={{
headerShown: false }} />
<Stack.Screen name="DetalleCarneMarisco" component={DetalleCarneMarisco} options={{
headerShown: false }} />
</Stack.Navigator>
);
};
export default CarneMarisco;