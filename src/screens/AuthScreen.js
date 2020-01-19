import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Logo from '../components/Logo/Logo';

export default class AuthScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />


    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text> AuthScreen </Text>
            </View>
        );
    }
}
