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

    componentDidMount() {
        const { replace } = this.props.navigation;
        this.props.onLogout(replace);
    }


    render() {

        return (
            <Spinner />
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
        onLogout: (replace) => dispatch(actions.onLogout(replace))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutScreen)