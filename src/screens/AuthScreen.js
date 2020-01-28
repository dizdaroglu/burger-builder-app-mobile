import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import Logo from '../components/Logo/Logo';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Spinner from '../components/Spinner/Spinner';
import AuthForm from '../components/auth/authForm';
import { setTokens, getTokens } from '../key';
import { autoSignIn } from '../store/actions/auth';
import { bindActionCreators } from 'redux';

class AuthScreen extends Component {

    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        isSignup: true,
        loading: true
    }
    goNext = () => {
        this.props.navigation.navigate('Home')
    }
    componentDidMount() {
        console.log("authScreen2")
        getTokens((value) => {
            if (value[0][1] === null) {
                this.setState({ loading: false })
            } else {
                this.props.autoSignIn(value[1][1]).then(() => {
                    if (!this.props.Auth.auth.token) {
                        this.setState({ loading: false })
                    } else {
                        setTokens(this.props.Auth.auth, () => {
                            this.goNext();
                        })
                    }
                })
            }
        })
    }
    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color="#cf8f2e" />
                </View>
            )
        }
        return (
            <ScrollView style={styles.authContainer}>
                <View style={{ alignItems: 'center', }}>
                    <Image
                        source={require('../assets/burger2.png')}
                        style={styles.img}
                    />
                    <AuthForm goNext={this.goNext} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    authContainer: {
        flex: 0.7,
        backgroundColor: '#cf8f2e',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 270,
        padding: 50,
    },
    img: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
})

const mapStateToProps = state => {
    return {
        Auth: state.auth,
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ autoSignIn }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)