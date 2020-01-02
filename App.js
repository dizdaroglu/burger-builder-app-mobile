import React from 'react';
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import CustomDrawer from './src/components/Drawer/CustomDrawer'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <CustomDrawer navigation={navigation} />
    })
  }
})
const CheckoutStack = createStackNavigator({
  Check: {
    screen: CheckoutScreen,

    navigationOptions: ({ navigation }) => ({
      headerLeft: <CustomDrawer navigation={navigation} />
    })
  }
})

const Drawer = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Checkout: {
    screen: CheckoutStack
  }
}, {
  drawerWidth: 260
})
export default createAppContainer(Drawer);
