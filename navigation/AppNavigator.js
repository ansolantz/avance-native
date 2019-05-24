import React from 'react';
import SignupScreen from '../screens/onboarding/SignupScreen';
import LoginScreen from '../screens/onboarding/LoginScreen';
import AuthLoadingScreen from '../screens/onboarding/AuthLoadingScreen';
import SplashScreen from '../screens/onboarding/SplashScreen';


import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

//
const OnboardingStack = createStackNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  SignupScreen: SignupScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    // Route for authentication.
    // Help src https://reactnavigation.org/docs/en/auth-flow.html

    AuthLoading: AuthLoadingScreen,
    Onboarding: OnboardingStack,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));





