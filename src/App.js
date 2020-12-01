import React, { Component } from 'react';
import {
  Text, View, SafeAreaView,
  Image, TouchableOpacity,
  ScrollView, Button, FlatList,
  TextInput, StyleSheet, Dimensions,
  Modal
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/Login/login';
import SignUpScreen from './screens/Login/signup';
import ForgotPassScreen from './screens/Login/forgotPass';

const navOptionHandler = () => ({
    headerShown: false
  })
  const StackLogin = createStackNavigator();
  function LoginStack() {
    return (
      <StackLogin.Navigator initialRouteName="SignUp">
        <StackLogin.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <StackLogin.Screen name="SignUp" component={SignUpScreen} options={navOptionHandler} />
        <StackLogin.Screen name="ForgotPass" component={ForgotPassScreen} options={navOptionHandler} />
      </StackLogin.Navigator>
    )
  }
  const StackHome = createStackNavigator();
  function HomeStack() {
    return (
      <StackHome.Navigator initialRouteName="MainPage1">
        <StackHome.Screen name="MainPage1" component={LoginScreen} options={navOptionHandler} />
        <StackHome.Screen name="MainPage2" component={LoginScreen} options={navOptionHandler} />
      </StackHome.Navigator>
    )
  }
const StackApp = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="LoginApp">
        <StackApp.Screen name="LoginApp" component={LoginStack} options={navOptionHandler} />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}