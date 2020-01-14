import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Animated, Image, Dimensions, Easing } from 'react-native';
import stylesFont from '../stylesFont';

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(200)
    }

    async componentDidMount() {
        Animated.sequence([
            Animated.timing(this.state.logoOpacity, {
                toValue: 1,
                duration: 2000,
            }),
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1000,
            })
        ]).start(() => {
            this.props.navigation.navigate('Home')
        })
    }


    render() {

        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Animated.Image
                    source={require('../assets/burger2.png')}
                    style={{ opacity: this.state.logoOpacity }}
                >
                </Animated.Image>

                <Animated.Text style={{ ...styles.title, marginTop: this.state.titleMarginTop }}>
                    Burger Builder
                    </Animated.Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#cf8f2e"
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        width: 400,
        fontSize: 21,
        color: '#323232',
        fontFamily: stylesFont.Light
    }
})
