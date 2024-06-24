import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'expo-router';


export default function SettingScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.title, { color: theme.text }]}>Settings</Text>
      <Button mode="contained" style={styles.button} onPress={toggleTheme}>
        Change Theme
      </Button>
      <Button mode="contained" style={styles.button}>
        Change Language
      </Button>
      <Link href="/" asChild>
        <Button mode="contained" style={styles.button}>
          Cerrar Sesión
        </Button>
      </Link>
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
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});