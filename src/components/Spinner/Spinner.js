import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const Spinner = (props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={props.bg ? props.bg : "#cf8f2e"} />
    </View>
);

export default Spinner;
