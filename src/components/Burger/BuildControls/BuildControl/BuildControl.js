import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import stylesFont from '../../../../stylesFont';

const buildControl = (props) => (
    <View style={styles.ingredient}>
        <View style={styles.ingredientLeftText}>
            <Text style={styles.ingredientText}>{props.label}</Text>
        </View>
        <View style={styles.ingredientBtn}>
            <TouchableOpacity style={styles.lessBtn} onPress={props.removed} disabled={props.disabled}>
                <Text style={styles.btnText}>Less</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.moreBtn} onPress={props.added}>
                <Text style={styles.btnText}>More</Text>
            </TouchableOpacity>
        </View>
    </View>
);


const styles = StyleSheet.create({
    ingredient: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ingredientText: {
        marginHorizontal: 10,
        color: 'black',
        fontFamily: stylesFont.Bold
    },
    ingredientBtn: {
        flexDirection: 'row',
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
        fontFamily: stylesFont.Light
    }
})

export default buildControl;
