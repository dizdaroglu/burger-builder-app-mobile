import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from '../components/Logo/Logo';
import axios from '../../axios-orders';
import Spinner from '../components/Spinner/Spinner';
import { withNavigationFocus } from 'react-navigation';
import stylesFont from '../stylesFont';

class CheckoutScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />


    }
    state = {
        orders: [],
        loading: true
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused) {
            axios.get('orders.json')
                .then(response => {
                    const fetchedOrders = [];
                    for (let key in response.data) {
                        fetchedOrders.push({
                            ...response.data[key],
                            id: key
                        })
                    }
                    this.setState({ loading: false, orders: fetchedOrders })
                })
                .catch(error => {
                    console.log('error');
                    this.setState({ loading: false })
                })
        }
    }

    componentDidMount() {
        axios.get('orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({ loading: false, orders: fetchedOrders })
            })
            .catch(error => {
                console.log('error');
                this.setState({ loading: false })
            })
    }

    render() {
        let card = (
            this.state.orders.map(order => (
                <View style={styles.card} key={order.id}>
                    <View style={styles.ingredients}>
                        {
                            Object.keys(order.ingredients).map((i) => (
                                <View style={styles.ingredient} key={i}>
                                    <Text style={{
                                        fontFamily: stylesFont.Bold,
                                        color: '#703b09'
                                    }}>{i} ({order.ingredients[i]})</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.price}>
                        <Text style={{
                            fontFamily: stylesFont.Bold,
                            color: '#cf8f2e'
                        }}> Price: ${order.price}</Text>
                    </View>
                </View>
            ))
        )
        if (this.state.loading) {
            card = <Spinner />
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    {card}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        borderWidth: 1,
        borderColor: '#cf8f2e',
        marginVertical: 20,
        marginHorizontal: 20,
        padding: 20
    },
    ingredients: {
        flexDirection: 'row',
    },
    ingredient: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginRight: 5,
        marginBottom: 5
    }

})
export default withNavigationFocus(CheckoutScreen)