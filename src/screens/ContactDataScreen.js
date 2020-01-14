import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Burger from '../components/Burger/Burger';
import Logo from '../components/Logo/Logo';
import Input from '../components/UI/Input/Input';
import MyPicker from '../components/UI/MyPicker/MyPicker';
import axios from '../../axios-orders';
import Spinner from '../components/Spinner/Spinner';

export default class ContactDataScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />

    }
    state = {
        orderForm: {
            name: '',
            street: '',
            zipCode: '',
            country: '',
            email: '',
            //  deliveryMethod: '',
        },
        loading: false
    }

    orderHandler = () => {
        this.setState({ loading: true })
        const formData = {};
        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement]
        }

        const { params } = this.props.navigation.state;
        const ingredients = params ? params.ingredient : null;
        const order = {
            ingredients: ingredients.ingredients,
            price: ingredients.totalPrice,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => {
                setTimeout(() => {
                    this.setState({ loading: false })
                    this.props.navigation.replace('Home')
                }, 400)
            })
            .catch(error => {
                this.setState({ loading: false })
                console.log(error)
            })
    }
    render() {
        const { params } = this.props.navigation.state;
        const ingredients = params ? params.ingredient.ingredients : null;

        let form = (
            <View style={styles.form}>
                <View style={styles.formUpText}>
                    <Text style={styles.text}>Enter your Contact Data</Text>
                </View>
                <Input
                    placeholder="Your Name"
                    value={this.state.orderForm.name}
                    onChange={(name) => this.setState({ orderForm: { ...this.state.orderForm, name } })}
                />
                <Input
                    placeholder="Street"
                    value={this.state.orderForm.street}
                    onChange={(street) => this.setState({ orderForm: { ...this.state.orderForm, street } })}
                />
                <Input
                    placeholder="ZIP Code"
                    value={this.state.orderForm.zipCode}
                    onChange={(zipCode) => this.setState({ orderForm: { ...this.state.orderForm, zipCode } })}
                />
                <Input
                    placeholder="Country"
                    value={this.state.orderForm.country}
                    onChange={(country) => this.setState({ orderForm: { ...this.state.orderForm, country } })}
                />
                <Input
                    placeholder="Your E-Mail"
                    value={this.state.orderForm.email}
                    onChange={(email) => this.setState({ orderForm: { ...this.state.orderForm, email } })}
                />
                <MyPicker />
                <View style={styles.orderButton}>
                    <TouchableOpacity style={styles.button} onPress={() => this.orderHandler()}>
                        <Text style={styles.buttonText}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <View style={styles.container}>
                <View style={styles.burger}>
                    <Burger ingredient={ingredients} />
                </View>
                {form}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    burger: {
        flex: 0.3,
        justifyContent: 'center',
    },
    form: {
        flex: 0.7,
        borderColor: '#ccc',
        borderWidth: 1,
        margin: 15
    },
    formUpText: {
        alignItems: 'center',
        marginVertical: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    orderButton: {
        alignItems: 'center',
        marginTop: 10
    },
    button: {
        borderWidth: 1,
        borderColor: '#cf8f2e'
    },
    buttonText: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontWeight: 'bold',
        color: '#cf8f2e'
    }
})