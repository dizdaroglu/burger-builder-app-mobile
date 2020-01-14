import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import stylesFont from '../../../stylesFont';

export default class OrderSummary extends Component {


    render() {
        const ingredientSummary = Object.keys(this.props.ingredient)
            .map(igKey => {
                return (
                    <View key={igKey} style={{ flexDirection: 'row' }}>
                        <View style={{ width: 70 }} >
                            <Text style={{ fontFamily: stylesFont.Regular }}>{igKey.toUpperCase()} :</Text>
                        </View>
                        <Text>{this.props.ingredient[igKey]}</Text>
                    </View>
                )
            })
        return (
            <View style={styles.container}>
                <View style={styles.order}>
                    <Text style={styles.orderText}>You Order</Text>
                </View>
                <View style={styles.burger}>
                    <Text style={{ fontFamily: stylesFont.SemiBold }}> A delicious burger with the following ingredients </Text>
                </View>
                <View style={styles.ingredient}>
                    {
                        ingredientSummary
                    }
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>Total Price: ${this.props.price.toFixed(2)}</Text>
                </View>
                <View style={styles.checkout}>
                    <Text style={{ fontFamily: stylesFont.Regular }}>Continue to checkout?</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.props.close()} style={styles.cancel}>
                        <Text style={styles.cancelBtn}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.continue()} style={styles.continue}>
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
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderText: {
        fontSize: 17,
        fontFamily: stylesFont.ExtraBold
    },
    burger: {
        marginVertical: 20
    },
    ingredient: {
        marginVertical: 15
    },
    price: {
        marginVertical: 10
    },
    priceText: {
        fontFamily: stylesFont.Bold
    },
    checkout: {
        marginTop: 10,
        marginBottom: 5
    },
    button: {
        flexDirection: 'row',
    },
    cancelBtn: {
        padding: 10,
        margin: 10,
        color: '#944317',
        fontFamily: stylesFont.Bold,
        borderWidth: 1,
        borderColor: '#944317'
    },
    continueBtn: {
        padding: 10,
        margin: 10,
        color: '#5c9210',
        fontFamily: stylesFont.Bold,
        borderWidth: 1,
        borderColor: '#5c9210'

    }

})