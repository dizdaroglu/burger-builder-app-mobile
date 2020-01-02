import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Logo extends Component {

    render() {
        return (
            <View style={styles.logo}>
                <Image
                    style={styles.img}
                    source={require('../../assets/logo.png')}
                    resizeMode="center"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        backgroundColor: 'white',
        width: 55,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 35,
        height: 35,

    }
})
