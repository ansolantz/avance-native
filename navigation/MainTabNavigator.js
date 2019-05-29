import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import DashboardScreen from '../screens/DashboardScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BarcodeScannerScreen from '../screens/BarcodeScannerScreen';
import FeedScreen from '../screens/FeedScreen';
import PedometerScreen from '../screens/PedometerScreen';
import HydrationScreen from '../screens/HydrationScreen';
import VitaminScreen from '../screens/VitaminScreen';
import ImageRecognitionScreen from '../screens/ImageRecognitionScreen';



const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
  Hydration: HydrationScreen,
  Vitamin: VitaminScreen,
  Pedometer: PedometerScreen,
});

DashboardStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='SimpleLineIcons'
      focused={focused}
      name={Platform.OS === 'ios' ? 'home' : 'home'}
    />
  ),
};


const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
  BarcodeScanner: BarcodeScannerScreen,
  ImageRecognition: ImageRecognitionScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
     <TabBarIcon
      type='MaterialIcons'
      focused={focused}
      name={Platform.OS === 'ios' ? 'add-circle-outline' : 'add-circle-outline'}
    />
  ),
};

const FeedStack = createStackNavigator({
  Feed: FeedScreen,
});

FeedStack.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='Octicons'
      focused={focused}
      name={Platform.OS === 'ios' ? 'tasklist' : 'tasklist'}
    />
  ),
};

const MyAccountStack = createStackNavigator({
  MyAccount: MyAccountScreen,
});

MyAccountStack.navigationOptions = {
  tabBarLabel: 'My Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='FontAwesome'
      focused={focused}
      name={Platform.OS === 'ios' ? 'user-o' : 'user-o'}
    />
  ),
};




export default createBottomTabNavigator({

  DashboardStack,
  RegisterStack,
  FeedStack,
  MyAccountStack,

});
