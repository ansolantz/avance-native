import React from 'react';
import SignupScreen from '../screens/onboarding/SignupScreen';
import SignInScreen from '../screens/onboarding/SignInScreen';
import AuthLoadingScreen from '../screens/onboarding/AuthLoadingScreen';
import SplashScreen from '../screens/onboarding/SplashScreen';


import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

//
const OnboardingStack = createStackNavigator({ SplashScreen: SplashScreen, SignInScreen: SignInScreen, SignupScreen: SignupScreen });

export default createAppContainer(createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Onboarding: OnboardingStack,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));





