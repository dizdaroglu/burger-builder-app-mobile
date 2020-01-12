import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Input = (props) => (
    <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
    />
);
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginBottom: 10
    }
})

export default Input;
