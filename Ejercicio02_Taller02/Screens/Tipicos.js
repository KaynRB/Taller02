import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListaTipicos from './ListaTipicos';
import DetalleTipicos from './DetalleTipicos';
const Stack = createStackNavigator();
const Tipicos = () => {
return (
<Stack.Navigator initialRouteName="Tipicos">
<Stack.Screen name="Tipicos" component={ListaTipicos} options={{
headerShown: false }} />
<Stack.Screen name="DetalleTipicos" component={DetalleTipicos} options={{
headerShown: false }} />
</Stack.Navigator>
);
};
export default Tipicos;