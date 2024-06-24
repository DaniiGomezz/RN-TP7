import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="listaTareas"
        options={{
          title: 'list',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name="clipboard-list" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="settings-sharp" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}