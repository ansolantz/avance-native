import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LinksScreen from '../screens/LinksScreen';
import RecommendationScreen from '../screens/RecommendationScreen';
import BarcodeScannerScreen from '../screens/BarcodeScannerScreen';
import FeedScreen from '../screens/FeedScreen';
import ModalScreen from '../screens/ModalScreen';
import SettingsScreen from '../screens/SettingsScreen';

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };


const DashboardStack = createStackNavigator({
  Dashboard: DashboardScreen,
  Recommendation: RecommendationScreen,
});

DashboardStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
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
  Modal: ModalScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='AntDesign'
      focused={focused}
      name={Platform.OS === 'ios' ? 'addfile' : 'addfile'}
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
  tabBarLabel: 'MyAccount',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='FontAwesome'
      focused={focused}
      name={Platform.OS === 'ios' ? 'user-o' : 'user-o'}
    />
  ),
};



// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  //HomeStack,
  DashboardStack,
  RegisterStack,
  FeedStack,
  MyAccountStack,

  //LinksStack,
  //SettingsStack
});
