import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const backdrop = (props) => (
    props.show ? <View style={styles.backdrop}></View> : null
);

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red',
    }
})
export default backdrop;
