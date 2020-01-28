import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const input = (props) => {
    let template = null;

    switch (props.type) {
        case "textinput":
            template =
                <TextInput
                    {...props}
                    underlineColorAndroid="transparent"
                    style={[styles.input, props.overrideStyle]}
                />

        default:
            return template;
    }
    return template;
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderBottomColor: '#eaeaea',
        borderBottomWidth: 1,
        fontSize: 16,
        padding: 5,
        marginTop: 10,
        paddingHorizontal: 5
    }
})
export default input;
