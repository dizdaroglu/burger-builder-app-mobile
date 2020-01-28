import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';
import { connect } from 'react-redux';
import { signIn, signUp } from '../../store/actions/auth';
import { bindActionCreators } from 'redux';
import { setTokens } from '../../key';

class AuthForm extends Component {
    state = {
        type: 'Login',
        action: 'Login',
        actionMode: 'I want to register',
        hasErrors: false,
        form: {
            email: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: '',
                valid: false,
                type: 'textinput',
                rules: {
                    confirmPass: 'password',
                }
            }
        }
    }

    changeFormType = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'I want to Login' : 'I want to Register'
        })
    }
    updateInput = (name, value) => {
        this.setState({ hasErrors: false });
        let formCopy = this.state.form;
        formCopy[name].value = value;

        let rules = formCopy[name].rules;
        let valid = ValidationRules(value, rules, formCopy);

        formCopy[name].valid = valid;

        this.setState({
            form: formCopy
        })
    }
    formHasErrors = () => (
        this.state.hasErrors ?
            <View style={styles.errorContainer}>
                <Text style={styles.errorLabel}>Oops, check your info.</Text>
            </View>
            : null
    )
    confirmPassword = () => (

        this.state.type != 'Login' ?
            <Input
                placeholder="Confirm your password"
                placeholderTextColor="#cecece"
                value={this.state.form.confirmPassword.value}
                type={this.state.form.confirmPassword.type}
                onChangeText={value => this.updateInput('confirmPassword', value)}
                secureTextEntry
            // overrideStyle={}
            />
            : null
    )
    manageAccess = () => {
        if (!this.props.Auth.auth.uid) {
            this.setState({ hasErrors: true })
        } else {
            setTokens(this.props.Auth.auth, () => {
                this.setState({ hasErrors: false })
                this.props.goNext();
            })
        }
    }
    submitUser = () => {
        let isFormValid = true;
        let formToSubmit = {};
        const formCopy = this.state.form;

        for (let key in formCopy) {
            if (this.state.type === 'Login') {
                if (key !== 'confirmPassword') {
                    isFormValid = isFormValid && formCopy[key].valid;
                    formToSubmit[key] = formCopy[key].value;
                }
            } else {
                isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value;
            }
        }
        if (isFormValid) {
            if (this.state.type === 'Login') {
                this.props.signIn(formToSubmit).then(() => {
                    this.manageAccess()
                })
            } else {
                this.props.signUp(formToSubmit).then(() => {
                    this.manageAccess()
                })
            }
        } else {
            this.setState({
                hasErrors: true
            })
        }
    }
    render() {
        return (
            <View style={{ width: '100%' }}>
                <Input
                    placeholder="Enter email"
                    placeholderTextColor="#cecece"
                    autoCapitalize={"none"}
                    value={this.state.form.email.value}
                    type={this.state.form.email.type}
                    keyboardType={"email-address"}
                    onChangeText={value => this.updateInput('email', value)}
                />
                <Input
                    placeholder="Enter your password"
                    placeholderTextColor="#cecece"
                    value={this.state.form.password.value}
                    type={this.state.form.password.type}
                    onChangeText={value => this.updateInput('password', value)}
                    secureTextEntry
                // overrideStyle={}
                />

                {this.confirmPassword()}
                {this.formHasErrors()}
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.submitUser()}>
                            <Text style={styles.buttonText}>{this.state.action}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.changeFormType()}>
                            <Text style={styles.buttonText}>{this.state.actionMode}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    errorContainer: {
        marginBottom: 10,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#f44336'
    },
    errorLabel: {
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        marginBottom: 10,
        marginTop: 10
    },
    buttonText: {
        color: '#684E32'
    }
})

const mapStateToProps = state => {
    return {
        Auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signIn, signUp }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)