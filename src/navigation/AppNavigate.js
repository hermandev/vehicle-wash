import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screen/HomeScreen'
import LoginScreen from '../screen/LoginScreen'
import RegisterScreen from '../screen/RegisterScreen'



const AppNavigate = createStackNavigator({
    Home:{
        screen:HomeScreen
    },
    Login: {
        screen:LoginScreen
    },
    Register: {
        screen:RegisterScreen
    }
})


export default AppNavigate