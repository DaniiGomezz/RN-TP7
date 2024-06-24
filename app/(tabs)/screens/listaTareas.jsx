import task from '@/assets/task.json';
import { FlatList , View, Text, StyleSheet } from 'react-native';
import{ Card } from 'react-native-paper';
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'expo-router';
import AnimatedFabComponent from '@/components/AnimatedFabComponent';

export default function ListaTareas() {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.title, { color: theme.text }]}>Lista de tareas</Text>
            <FlatList
                data={task}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link href={`/${item.id}`} asChild>
                    <Card style={styles.card}>
                        <Card.Title title={item.titulo}></Card.Title>
                    </Card>
                    </Link>
                )}
            />  
            <Link href="/newTask" asChild>
            <AnimatedFabComponent visible={true} />
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
    },
    card: {
        margin: 15,
        padding: 10,
        backgroundColor: '#f1f1f1',
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});