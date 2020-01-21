import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo/Logo';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import MyModal from '../components/UI/Modal/MyModal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../components/Spinner/Spinner';
import Au from '../components/UI/Au/Au';
import { YellowBox } from 'react-native';
//redux
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

console.disableYellowBox = true;

class HomeScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#703b09',
        },
        headerRight: <Logo />
    }

    state = {
        purchasing: false,
    }
    componentDidMount() {
        this.props.onInitIngredients()
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        return sum > 0;
    }


    toggleModal = () => {
        this.setState({
            purchasing: !this.state.purchasing
        })
    }
    continueHandler = () => {
        this.toggleModal();
        this.props.onInitPurchase();
        this.props.navigation.navigate('Summary', { ingredient: this.props })
    }

    render() {
        console.log('token2', this.props.token)
        const disabledInfo = {
            ...this.props.ings
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let burger = this.props.error ? <Text>hata</Text> : <Spinner />;
        if (this.props.ings) {
            burger = (
                <Au>
                    <View style={styles.up}>
                        <Burger ingredient={this.props.ings} />
                    </View>
                    <View style={styles.down}>
                        <BuildControls
                            ingredientAdded={this.props.onIngredientAdded}
                            ingredientRemoved={this.props.onIngredientRemoved}
                            price={this.props.price}
                            disabled={disabledInfo}
                            open={this.toggleModal}
                            purchasable={this.updatePurchaseState(this.props.ings)}
                        />
                    </View>
                </Au>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                <MyModal show={this.state.purchasing}>
                    <OrderSummary
                        continue={this.continueHandler}
                        close={this.toggleModal}
                        price={this.props.price}
                        ingredient={this.props.ings}
                    />
                </MyModal>
                {burger}
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
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        token: state.auth.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredient()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)