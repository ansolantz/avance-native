import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import RegisterScreen from '../screens/RegisterScreen'
import LinksScreen from '../screens/LinksScreen';
import RecommendationScreen from '../screens/RecommendationScreen';
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
      type='MaterialCommunityIcons'
      focused={focused}
      name={Platform.OS === 'ios' ? 'home-circle' : 'home-circle'}
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

const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      type='MaterialIcons'
      focused={focused}
      name={Platform.OS === 'ios' ? 'add-a-photo' : 'add-a-photo'}
    />
  ),
};

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
//   Recommendation: RecommendationScreen
// });

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });

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

  MyAccountStack,
  RegisterStack,
  //LinksStack,
  //SettingsStack
});
