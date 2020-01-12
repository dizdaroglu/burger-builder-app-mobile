import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { createAppContainer, DrawerItems, createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';
import CheckoutSummary from './src/screens/CheckoutSummary';
import ContactDataScreen from './src/screens/ContactDataScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import SplashScreen from './src/screens/SplashScreen';
import CustomDrawer from './src/components/Drawer/CustomDrawer';
import HomeIcon from './src/components/Drawer/HomeIcon';
import CheckoutIcon from './src/components/Drawer/CheckoutIcon';
import { ScrollView } from 'react-native-gesture-handler';


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image
        source={require('./src/assets/logo.png')}
        style={{
          height: 120,
          width: 150,
          margin: 20,
        }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>

  </SafeAreaView>
)


const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <CustomDrawer navigation={navigation} />
    })
  },
  Splash: {
    screen: SplashScreen
  },
  Summary: {
    screen: CheckoutSummary
  },
  Contact: {
    screen: ContactDataScreen
  }
}, {
  initialRouteName: 'Home'
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
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: 'Burger Builder',
      drawerIcon: ({ tintColor }) => (
        <HomeIcon />
      )
    }
  },
  Checkout: {
    screen: CheckoutStack,
    navigationOptions: {
      drawerLabel: 'Checkout',
      drawerIcon: () => (
        <CheckoutIcon />
      )
    }
  }
}, {
  drawerWidth: 260,
  contentComponent: CustomDrawerComponent,
  contentOptions: {
    activeTintColor: '#40a4c8',
    inactiveTintColor: '#D6DCD9'
  }
})
export default createAppContainer(Drawer);
