import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { TextInput, Button } from 'react-native-paper';

type Params = {
    id: string;
    titulo: string;
    descripcion: string;
    autor: string;
    fecha: string;
};

export default function EditTask() {
    const params = useLocalSearchParams<Params>();
    const { id, titulo, descripcion, autor, fecha } = params;

    const [taskTitle, setTaskTitle] = useState(titulo);
    const [taskDescription, setTaskDescription] = useState(descripcion);
    const [taskAuthor, setTaskAuthor] = useState(autor);
    const [taskDate, setTaskDate] = useState(fecha);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Tarea</Text>
            <TextInput
                label="Título"
                value={taskTitle}
                onChangeText={setTaskTitle}
                style={styles.input}
            />
            <TextInput
                label="Descripción"
                value={taskDescription}
                onChangeText={setTaskDescription}
                style={styles.input}
            />
            <TextInput
                label="Autor"
                value={taskAuthor}
                onChangeText={setTaskAuthor}
                style={styles.input}
            />
            <TextInput
                label="Fecha"
                value={taskDate}
                onChangeText={setTaskDate}
                style={styles.input}
            />
            <Button mode="contained" style={styles.button}>
                Guardar
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff', // Cambiamos el color de fondo
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
    },
});
