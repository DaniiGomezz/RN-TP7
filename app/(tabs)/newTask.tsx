import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export default function AddNewTask() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Task</Text>
            <TextInput style={styles.input} placeholder="Autor" />
            <TextInput style={styles.input} placeholder="titulo" />
            <TextInput style={styles.input} placeholder="Descripción" />
            
            <View style={styles.dateContainer}>
                <Button onPress={showDatepicker} title="Seleccionar fecha" />
                <Text>{date.toDateString()}</Text>
            </View>
            
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                />
            )}
            
            <Button title="Save" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        marginBottom: 8,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
});