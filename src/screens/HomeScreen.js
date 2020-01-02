import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo/Logo';

class HomeScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.up}>

                </View>
                <View style={styles.down}>
                    <View style={styles.currentPrice}>
                        <Text>Current Price: <Text style={{ fontWeight: 'bold' }}>0</Text></Text>
                    </View>
                    <View style={styles.middle}>
                        <View style={styles.ingredient}>
                            <View style={styles.ingredientLeftText}>
                                <Text style={styles.ingredientText}>Salad</Text>
                            </View>
                            <View style={styles.ingredientBtn}>
                                <TouchableOpacity style={styles.lessBtn}>
                                    <Text style={styles.btnText}>Less</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.moreBtn}>
                                    <Text style={styles.btnText}>More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.ingredient}>
                            <View style={styles.ingredientLeftText}>
                                <Text style={styles.ingredientText}>Cheese</Text>
                            </View>
                            <View style={styles.ingredientBtn}>
                                <TouchableOpacity style={styles.lessBtn}>
                                    <Text style={styles.btnText}>Less</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.moreBtn}>
                                    <Text style={styles.btnText}>More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.ingredient}>
                            <View style={styles.ingredientLeftText}>
                                <Text style={styles.ingredientText}>Meat</Text>
                            </View>
                            <View style={styles.ingredientBtn}>
                                <TouchableOpacity style={styles.lessBtn}>
                                    <Text style={styles.btnText}>Less</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.moreBtn}>
                                    <Text style={styles.btnText}>More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.ingredient}>
                            <View style={styles.ingredientLeftText}>
                                <Text style={styles.ingredientText}>Tomato</Text>
                            </View>
                            <View style={styles.ingredientBtn}>
                                <TouchableOpacity style={styles.lessBtn}>
                                    <Text style={styles.btnText}>Less</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.moreBtn}>
                                    <Text style={styles.btnText}>More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.order}>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>ORDER NOW</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    up: {
        flex: 0.5
    },
    down: {
        backgroundColor: "#cf8f2e",
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ingredient: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ingredientText: {
        marginHorizontal: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    ingredientBtn: {
        flexDirection: 'row',
    },
    middle: {
        marginVertical: 10
    },
    ingredientLeftText: {
        marginRight: 60
    },
    lessBtn: {
        width: 80,
        padding: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#AA6817',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d39952'
    },
    moreBtn: {
        width: 80,
        borderWidth: 1,
        padding: 5,
        borderStyle: 'solid',
        borderColor: '#AA6817',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8f5e1e'
    },
    btnText: {
        color: 'white',
    },
    orderButton: {
        backgroundColor: '#dad735',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: '#966909',
        borderStyle: 'solid',
        borderWidth: 1,
        color: '#966909',

    }
})
export default HomeScreen