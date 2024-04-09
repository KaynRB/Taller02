import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Tipicos from './Screens/Tipicos';
import Sopas from './Screens/Sopas';
import CarneMarisco from './Screens/CarneMarisco';
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "#f48b28",
          tabBarActiveTintColor: "#633204",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Tipicos') {
              iconName = 'pizza';
            } else if (route.name === 'Sopas') {
              iconName = 'color-fill';
            } else if (route.name === 'Carne/Mariscos') {
              iconName = 'fish';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Tipicos" component={Tipicos} />
        <Tab.Screen name="Sopas" component={Sopas} />
        <Tab.Screen name="Carne/Mariscos" component={CarneMarisco} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
