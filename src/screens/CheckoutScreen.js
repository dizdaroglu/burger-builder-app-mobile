import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from '../components/Logo/Logo';
import axios from '../../axios-orders';
import Spinner from '../components/Spinner/Spinner';
import { withNavigationFocus } from 'react-navigation';
import stylesFont from '../stylesFont';

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class CheckoutScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />


    }
    state = {
        loading: true,
        isAuth: true
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused) {
            this.props.onFetchOrders(this.props.token, this.props.userId);
        }
    }

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let card = (
            this.props.orders.map(order => (
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
        if (this.props.loading) {
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
const mapStateToProps = state => {
    console.log("token", state.auth)

    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.auth.token,
        userId: state.auth.auth.uid
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(CheckoutScreen))