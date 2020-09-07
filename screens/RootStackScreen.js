import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

import PhoneVerificationScreen from './PhoneVerificationScreen';
import WorthScreen from './WorthScreen';
import SubmitLoanScreen from './SubmitLoanScreen';
import Income from './Income';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen
      name="PhoneVerificationScreen"
      component={PhoneVerificationScreen}
    />
    <RootStack.Screen name="Worth" component={WorthScreen} />
    <RootStack.Screen name="SubmitLoan" component={SubmitLoanScreen} />
    <RootStack.Screen name="Income" component={Income} />

    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
