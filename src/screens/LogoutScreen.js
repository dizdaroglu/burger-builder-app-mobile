import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import * as actions from '../store/actions/index';
import Spinner from '../components/Spinner/Spinner';

class LogoutScreen extends Component {
    static navigationOptions = {
        header: null
    }


    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Logout</Text>
            </View>
        );
    }
}
export default LogoutScreen