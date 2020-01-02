import React, { Component } from 'react';
import { DrawerItems } from 'react-navigation'
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class CustomDrawer extends Component {

    toggleMenu = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <TouchableOpacity
                style={{ paddingHorizontal: 10 }}
                onPress={this.toggleMenu}
            >
                <Icon
                    name="ios-menu"
                    size={26}
                    color="white"
                />
            </TouchableOpacity>
        )
    }
}




export default CustomDrawer