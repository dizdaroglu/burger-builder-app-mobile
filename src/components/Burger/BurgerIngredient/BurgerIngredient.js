import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class BurgerIngredient extends Component {


    render() {

        let ingredient = null;

        const hgStyles = {
            height: this.props.hg
        }

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <View style={styles.breadBottom}></View>
                break;
            case ('bread-top'):
                ingredient = (
                    <View style={styles.breadTop}>
                        <View style={styles.seeds}></View>
                        <View style={styles.seeds1}></View>
                        <View style={styles.seeds2}></View>
                        <View style={styles.seeds3}></View>
                        <View style={styles.seeds4}></View>
                        <View style={styles.seeds5}></View>

                    </View>
                );
                break;
            case ('meat'):
                ingredient = <View style={styles.meat}></View>
                break;
            case ('cheese'):
                ingredient = <View style={styles.cheese}></View>
                break;
            case ('tomato'):
                ingredient = <View style={styles.tomato}></View>
                break;
            case ('salad'):
                ingredient = <View style={styles.salad}></View>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

const styles = StyleSheet.create({
    breadBottom: {
        width: '90%',
        height: '17%',
        backgroundColor: '#eccd93',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginHorizontal: 24
    },
    breadTop: {
        backgroundColor: '#eccd93',
        height: '24%',
        width: '90%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        marginTop: 20,
        marginHorizontal: 24,
        position: 'relative'
    },
    seeds: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 5,
        height: 9,
        borderRadius: 5,
        top: '16%',
        left: '8%',
        transform: [{ rotate: '-20deg' }],
        shadowOffset: { width: -2, height: -3 },
        shadowColor: '#c9c9c9',
        shadowOpacity: 1.0,
    },
    seeds1: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 5,
        height: 9,
        borderRadius: 5,
        top: '40%',
        left: '38%',
        transform: [{ rotate: '60deg' }],
        shadowOffset: { width: -2, height: -3 },
        shadowColor: '#c9c9c9',
        shadowOpacity: 1.0,
    },
    seeds2: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 5,
        height: 9,
        borderRadius: 5,
        top: '16%',
        left: '58%',
        transform: [{ rotate: '10deg' }],
        shadowOffset: { width: -2, height: -3 },
        shadowColor: '#c9c9c9',
        shadowOpacity: 1.0,
    },
    seeds3: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 5,
        height: 9,
        borderRadius: 5,
        top: '46%',
        left: '88%',
        transform: [{ rotate: '80deg' }],
        shadowOffset: { width: -2, height: -3 },
        shadowColor: '#c9c9c9',
        shadowOpacity: 1.0,
    },
    seeds4: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 5,
        height: 9,
        borderRadius: 5,
        top: '49%',
        left: '22%',
        transform: [{ rotate: '20deg' }],
        shadowOffset: { width: -2, height: -3 },
        shadowColor: '#c9c9c9',
        shadowOpacity: 1.0,
    },
    seeds5: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 5,
        height: 9,
        borderRadius: 5,
        top: '66%',
        left: '69%',
        transform: [{ rotate: '66deg' }],
        shadowOffset: { width: -2, height: -3 },
        shadowColor: '#c9c9c9',
        shadowOpacity: 1.0,
    },
    tomato: {
        backgroundColor: '#e7574a',
        height: '6%',
        width: '60%',
        borderRadius: 5,
        marginVertical: 2,
        marginHorizontal: 80,
    },
    salad: {
        height: '6%',
        width: '90%',
        backgroundColor: '#0fb50f',
        marginVertical: 2,
        marginHorizontal: 24,
        borderRadius: 20
    },
    cheese: {
        backgroundColor: '#ffcc33',
        height: '5%',
        width: '80%',
        borderRadius: 5,
        marginVertical: 2,
        marginHorizontal: 45,
    },
    meat: {
        backgroundColor: '#7B5D04',
        height: '10%',
        width: '90%',
        borderRadius: 30,
        marginVertical: 2,
        marginHorizontal: 24,
    }


})
