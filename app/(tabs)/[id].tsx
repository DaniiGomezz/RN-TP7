import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import task from '@/assets/task.json';
import { useLocalSearchParams, router } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

export default function ViewTask() {
    const { theme } = useTheme();

    const params = useLocalSearchParams();
    const { id } = params;

    const tarea = task.find((t) => t.id.toString() === id);

    if (!tarea) {   
        return (
            <View>
                <Text>Tarea no encontrada</Text>
            </View>
        );
    }

    const handleEdit = () => {
        router.navigate({
            pathname: `/(tabs)/editTask`,
        });
    }


    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Card style={styles.card}>
            <Card.Title title={tarea.titulo}></Card.Title>
            <Card.Content>
                <Text>{tarea.descripcion}</Text>
            </Card.Content>
            <Card.Actions>
                <Text>{tarea.autor}</Text>
            </Card.Actions>
            <Card.Actions>
                <Text>{tarea.fecha}</Text>
            </Card.Actions>
            <Button onPress={handleEdit} mode="contained">Editar</Button>
        </Card>
    </View>
    )
};

const styles = {
    container: {
        flex: 1,
        padding: 10
    },
    card: {
        margin: 10
    }
}