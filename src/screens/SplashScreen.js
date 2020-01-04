import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Animated, Image, Dimensions, Easing } from 'react-native';

export default class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        animationHeight: new Animated.Value(0),
        animationOpacity: new Animated.Value(0)
    }

    componentDidMount() {
        this.startAnimation()
    }
    startAnimation = () => {

        Animated.parallel([
            Animated.timing(this.state.animationHeight, {
                duration: 1000,
                toValue: Dimensions.get('window').height / 2,
                easing: Easing.linear
            }),
            Animated.timing(this.state.animationOpacity, {
                duration: 1000,
                toValue: 1
            })
        ]).start(() => {
            this.props.navigation.navigate('Home')
        })

    }

    render() {
        const boxAnimatedStyles = {
            transform: [{ translateY: this.state.animationHeight }],
            opacity: this.state.animationOpacity

        }
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Animated.Image
                    source={require('../assets/burger2.png')}
                    style={boxAnimatedStyles}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cf8f2e",
        alignItems: 'center',
    }
})
