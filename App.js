/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



// import React , { useState ,useEffect } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Platform,
//   Text,
//   StatusBar,
//   Image,
//   TextInput,
//   Button,
//   Alert,
//   FlatList,
//   SectionList,
//   TouchableHighlight,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from'./src/LoginScreen';
import SignupScreen from './src/SignupScreen';
import MainScreen from './src/MainScreen';
import SettingScreen from './src/SettingScreen';


const AppNavigator = createStackNavigator({
  Home:{
    screen: LoginScreen,
  
  },
  SignUp:{
    screen: SignupScreen,
   
  },
  Main:{
    screen: MainScreen,
    
  },
  Setting:{
    screen: SettingScreen,
    
  }
},{
  navigationOptions: { 
     header:null,  
  },


});



export default createAppContainer(AppNavigator);
