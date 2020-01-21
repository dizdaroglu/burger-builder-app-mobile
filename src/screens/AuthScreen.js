import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Logo from '../components/Logo/Logo';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import Spinner from '../components/Spinner/Spinner';

class AuthScreen extends Component {

    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        isSignup: true
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        })
    }
    submitHandler = () => {
        this.props.onAuth(
            this.state.email,
            this.state.password,
            this.state.isSignup
        )
        this.setState({
            email: '',
            password: ''
        })
    }
    componentDidMount() {
        if (!this.props.burgerBuilder && this.props.authRedirectPath !== 'Home') {
            this.props.onSetAuthRedirectPath()
        }

    }
    render() {
        console.log('heyyyooo1')

        let form = (
            <View style={styles.container}>
                <View style={styles.textInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={this.state.email}
                        placeholderTextColor="white"
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => this.submitHandler()}>
                        <Text style={styles.buttonSuccess}>SUBMIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.switchAuthModeHandler()}>
                        <Text style={styles.buttonDanger}>SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        if (this.props.loading) {
            form = <Spinner bg="#703b09" />

        }
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <Text>{this.props.error.message}</Text>
            )
        }

        if (this.props.isAuthenticated) {
            this.props.navigation.navigate(this.props.authRedirectPath)
        }
        return (
            <View style={styles.authContainer}>
                <Image
                    source={require('../assets/burger2.png')}
                    style={styles.img}
                />
                <View style={styles.login}>
                    <Text style={styles.text}>{this.state.isSignup ? "SIGNUP" : "SIGNIN"}</Text>
                </View>
                {errorMessage}

                {form}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    authContainer: {
        flex: 0.7,
        backgroundColor: '#cf8f2e',
        alignItems: 'center',
        paddingTop: 90,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 270,

    },
    img: {
        width: 60,
        height: 60
    },
    login: {
        marginBottom: 50,

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    container: {

        padding: 10,
        width: '90%',
        elevation: 1,
    },
    textInput: {
        marginTop: 10
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginBottom: 10,
        paddingLeft: 15,
        opacity: 0.4,
        color: 'white'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonSuccess: {
        color: '#944317',
        borderColor: '#944317',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 5,
        paddingVertical: 10,
        marginBottom: 15
    },
    buttonDanger: {
        fontSize: 12

    }
})

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        authRedirectPath: state.auth.authRedirectPath,
        isAuthenticated: state.auth.token,
        buildingBurger: state.burgerBuilder.building,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('Home'))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)