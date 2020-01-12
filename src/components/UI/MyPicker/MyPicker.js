import React, { Component } from 'react';
import { Text, View, Picker, StyleSheet } from 'react-native';

class MyPicker extends Component {
    state = { item: '' }
    update = (item) => {
        this.setState({ item: item })
    }
    render() {
        return (
            <Picker style={styles.picker} selectedValue={this.state.item} onValueChange={this.update}>
                <Picker.Item label="Fastest" value="fastest" />
                <Picker.Item label="Cheapest" value="cheapest" />
            </Picker>
        )
    }
}

const styles = StyleSheet.create({
    picker: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginBottom: 10
    }
})
export default MyPicker;
