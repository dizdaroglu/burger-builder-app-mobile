import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CheckoutScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        }
    }
    render() {
        return (
            <View>
                <Text> CheckoutScreen </Text>
            </View>
        );
    }
}
