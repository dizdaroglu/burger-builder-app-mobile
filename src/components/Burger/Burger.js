import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import stylesFont from '../../stylesFont';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredient)
        .map(igKey => {
            return [...Array(props.ingredient[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <Text style={styles.text}>Please start adding ingredients!</Text>
    }
    return (
        <View>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginVertical: 10,
        color: 'black',
        fontFamily: stylesFont.Bold
    }
})
export default burger;
