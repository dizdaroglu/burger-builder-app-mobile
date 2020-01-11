import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo/Logo';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import MyModal from '../components/UI/Modal/MyModal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    tomato: 0.7
}

class HomeScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />
    }

    state = {
        ingredients: {
            salad: 0,
            tomato: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasing: false

    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceRemovetion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceRemovetion;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        })
    }
    toggleModal = () => {
        this.setState({
            purchasing: !this.state.purchasing
        })
    }
    continueHandler = () => {
        this.toggleModal();
        this.props.navigation.navigate('Summary')
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <View style={{ flex: 1 }}>
                <MyModal show={this.state.purchasing}>
                    <OrderSummary
                        continue={this.continueHandler}
                        close={this.toggleModal}
                        price={this.state.totalPrice}
                        ingredient={this.state.ingredients}
                    />
                </MyModal>

                <View style={styles.up}>
                    <Burger ingredient={this.state.ingredients} />
                </View>
                <View style={styles.down}>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        price={this.state.totalPrice}
                        disabled={disabledInfo}
                        open={this.toggleModal}
                    />
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
})
export default HomeScreen