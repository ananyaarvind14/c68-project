import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import ProfileScreen from './pages/ProfileScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#19355f',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#19355f',
      },
      headerTintColor: '#FFFFFF',
      title: 'Profile',
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#19355f',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Profile: { screen: ProfileStack},
    Settings: { screen: SettingsStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#19355f',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(App);