import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo/Logo';
import Burger from '../components/Burger/Burger';

export default class CheckoutSummary extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />

    }
    state = {
        ingredients: {
            salad: 1,
            tomato: 1,
            cheese: 1,
            meat: 1
        },
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
                    <TouchableOpacity style={styles.cancel}>
                        <Text style={styles.cancelBtn}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.continue}>
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
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#944317'
    },
    continueBtn: {
        padding: 10,
        margin: 10,
        color: '#5c9210',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#5c9210'

    }
})
