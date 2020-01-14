import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import BuildControl from './BuildControl/BuildControl';
import stylesFont from '../../../stylesFont';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Tomato', type: 'tomato' },
]

const buildControls = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.currentPrice}>
            <Text style={{ fontFamily: stylesFont.SemiBold }}>Current Price: <Text style={{ fontWeight: 'bold' }}>${props.price.toFixed(2)}</Text></Text>
        </View>
        <View style={styles.middle}>
            {
                controls.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        removed={() => props.ingredientRemoved(ctrl.type)}
                        added={() => props.ingredientAdded(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}
                    />
                ))

            }
        </View>
        <View style={styles.order}>
            <TouchableOpacity style={styles.orderButton} disabled={!props.purchasable} onPress={() => props.open()}>
                <Text style={styles.orderButtonText}>ORDER NOW</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    middle: {
        marginVertical: 10
    },
    orderButton: {
        backgroundColor: '#dad735',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: '#966909',
        borderStyle: 'solid',
        borderWidth: 1,
        color: '#966909',
    },
    orderButtonText: {
        fontFamily: stylesFont.Bold,
    }
})

export default buildControls;
