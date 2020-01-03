import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const homeIcon = (props) => (
    <View style={styles.container}>
        <Image
            source={require('../../assets/burger2.png')}
            style={styles.burger}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {

    },
    burger: {
        height: 25,
        width: 25
    }
})
export default homeIcon;