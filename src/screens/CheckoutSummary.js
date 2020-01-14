import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo/Logo';
import Burger from '../components/Burger/Burger';
import stylesFont from '../stylesFont';

export default class CheckoutSummary extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',

        },
        headerRight: <Logo />,
        headerTintColor: 'white'

    }
    state = {
        ingredients: {
            salad: 1,
            tomato: 1,
            cheese: 1,
            meat: 1
        },
    }
    onContinueHandler = () => {
        const { params } = this.props.navigation.state;
        const ingredients = params ? params.ingredient : null;
        this.props.navigation.navigate('Contact', {
            ingredient: ingredients
        })
    }
    render() {
        const { params } = this.props.navigation.state;
        const ingredients = params ? params.ingredient.ingredients : null;
        // console.log(ingredients)
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.upText}>We hope it tastes well!</Text>
                </View>
                <View style={styles.burger}>
                    <Burger ingredient={ingredients} />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.cancel} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.cancelBtn}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onContinueHandler()} style={styles.continue}>
                        <Text style={styles.continueBtn}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    upText: {
        fontSize: 24,
        fontFamily: stylesFont.Regular
    },
    burger: {
        width: '100%',
        marginTop: 40,
    },
    button: {
        flexDirection: 'row',
    },
    cancelBtn: {
        padding: 10,
        margin: 10,
        color: '#944317',
        borderWidth: 1,
        borderColor: '#944317',
        fontFamily: stylesFont.Bold
    },
    continueBtn: {
        padding: 10,
        margin: 10,
        color: '#5c9210',
        borderWidth: 1,
        borderColor: '#5c9210',
        fontFamily: stylesFont.Bold

    }
})
