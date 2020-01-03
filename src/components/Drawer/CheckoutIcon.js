import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const checkoutIcon = (props) => (
    <View style={styles.container}>
        <Image
            source={require('../../assets/checkout.png')}
            style={styles.checkout}
        />
    </View>
)

const styles = StyleSheet.create({
    checkout: {
        height: 25,
        width: 25
    }
})
export default checkoutIcon;