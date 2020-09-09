import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from '../screens/DrawerContent';
import MainTabScreen from '../screens/MainTabScreen';
import SupportScreen from '../screens/SupportScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BookmarkScreen from '../screens/BookmarkScreen';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

import PhoneVerificationScreen from './PhoneVerificationScreen';
import WorthScreen from './WorthScreen';
import SubmitLoanScreen from './SubmitLoanScreen';
import Income from './Income';
import {connect} from 'react-redux';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootStackScreen = ({navigation, isAuth}) => {
  return (
    <>
      {isAuth !== false ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthStackScreen />
      )}
    </>
  );
};

const DrawerStack = ({navigation}) => {};

const AuthStackScreen = ({navigation}) => (
  <AuthStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="SubmitLoan" component={SubmitLoanScreen} />
    <RootStack.Screen name="Income" component={Income} />
    <RootStack.Screen
      name="PhoneVerificationScreen"
      component={PhoneVerificationScreen}
    />
    <RootStack.Screen name="Worth" component={WorthScreen} />
  </AuthStack.Navigator>
);

const mapStateToProps = state => {
  console.log(state);
  return {
    isAuth: state.isAuth,
  };
};

export default connect(
  mapStateToProps,
  {},
)(RootStackScreen);
