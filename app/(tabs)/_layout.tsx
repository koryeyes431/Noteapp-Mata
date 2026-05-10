import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // ✅ removes "index" title
        tabBarActiveTintColor: '#007AFF',
        headerStyle: {
          backgroundColor: 'rgb(0, 0, 0)',
        },
        headerTintColor: '#ffffff',
        tabBarStyle: {
          paddingBottom: 6,
          height: 90,
        }
      }}
    >
      <Tabs.Screen
        name="index" options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notes" options={{ 
          title: 'List',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}