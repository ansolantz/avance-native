import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SignupScreen from '../screens/SignupScreen';
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
});

DashboardStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SignupStack = createStackNavigator({
  Signup: SignupScreen,
});

SignupStack.navigationOptions = {
  tabBarLabel: 'Signup',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      focused={focused}
      name={Platform.OS === 'ios' ? 'logo-reddit' : 'logo-reddit'}
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
      focused={focused}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-checkmark-circle' : 'md-checkmark-circle'}
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
  Recommendation: RecommendationScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  //HomeStack,
  DashboardStack,
  SignupStack,
  RegisterStack,
  LinksStack,
  SettingsStack
});
