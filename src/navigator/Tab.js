import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Home, Cart, Details, Options } from '../pages/screens';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Icon name="home-outline" color="#000" size={18} />;
          },
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? color : '#000' }}>Home</Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarIcon: () => {
            return <Icon name="cart-outline" color="#000" size={18} />;
          },
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? color : '#000' }}>Carrinho</Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Detalhes"
        component={Details}
        options={{
          tabBarIcon: () => {
            return <Icon name="document-outline" color="#000" size={18} />;
          },
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? color : '#000' }}>Detalhes</Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Opções"
        component={Options}
        options={{
          tabBarIcon: () => {
            return <Icon name="settings-outline" color="#000" size={18} />;
          },
          tabBarLabel: ({ focused, color }) => {
            return (
              <Text style={{ color: focused ? color : '#000' }}>Opções</Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
