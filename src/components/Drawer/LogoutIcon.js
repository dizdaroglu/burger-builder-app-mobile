import React from 'react';
import { Text, View, Image } from 'react-native';

const logoutIcon = (props) => (
    <View>
        <Image
            source={require("../../assets/logout.png")}
            style={{ width: 25, height: 25 }}
        />
    </View>
);

export default logoutIcon;
