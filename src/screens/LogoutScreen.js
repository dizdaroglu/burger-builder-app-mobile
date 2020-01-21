import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import * as actions from '../store/actions/index';
import Spinner from '../components/Spinner/Spinner';

class LogoutScreen extends Component {

    componentDidMount() {
        this.props.onLogout();
    }

    render() {

        if (this.props.isAuthenticated) {
            <Spinner />
        } else {
            this.props.navigation.navigate('Auth', { email: '', password: '' })
        }
        return (
            <View>
                <Text> LogoutScreen </Text>
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen)