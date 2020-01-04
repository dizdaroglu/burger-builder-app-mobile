import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import BackDrop from '../Backdrop/Backdrop';
import Modal from "react-native-modal";

export default class MyModal extends Component {


    render() {
        const deviceWidth = Dimensions.get("window").width;
        const deviceHeight = Dimensions.get('window').height;

        return (
            <View>

                <Modal
                    isVisible={this.props.show}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}>
                    <View style={{ flex: 1 }}>
                        {this.props.children}
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modal: {

    }
})