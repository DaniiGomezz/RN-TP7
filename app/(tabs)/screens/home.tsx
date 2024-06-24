import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Bienvenido</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});