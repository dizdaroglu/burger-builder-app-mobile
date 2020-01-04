import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Logo from '../components/Logo/Logo';

export default class CheckoutScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />

    }
    render() {
        return (
            <View>
                <Text> CheckoutScreen </Text>
            </View>
        );
    }
}
