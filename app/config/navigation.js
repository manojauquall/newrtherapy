import React from "react";
import { Platform } from "react-native";
import {Icon} from 'native-base';
import { createStackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";

import DrawerContent from "../views/Sidebar"

import Profile from '../views/Profile';
import Extra from '../views/Extra';

import SignIn from '../views/SignIn';

import Home from '../views/Home';
import Info from '../views/Info';
import Logout from '../views/Logout';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Logout: {
    screen: Logout,
  }
}, {
  contentComponent: DrawerContent,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
});

export const SignedIn = TabNavigator({
  Home: {
    screen: Drawer,
	navigationOptions: {
	 tabBarLabel: 'label',
     tabBarIcon: () => <Icon name="list" size={35} style={{color:'white'}} />,
    }
  },
  Profile: {
    screen: Profile,
	navigationOptions: {
	 tabBarLabel: 'label',
     tabBarIcon: () => <Icon name={Platform.OS === "ios" ? "ios-add" : "md-add"} size={95} style={{color:'white',fontWeight: "bold",fontSize:50}} />,
    }
  },
  Extra: {
    screen: Extra,
	 navigationOptions: {
	 tabBarLabel: 'label',
     tabBarIcon: () => <Icon name="list" size={35} style={{color:'white'}} />,
    }
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  
  tabBarOptions: {
	showIcon: true,
    showLabel: false,
    activeTintColor: 'white',
    activeBackgroundColor: "white",
	backgroundColor: "#12D0FD",
    inactiveTintColor: 'white',
    labelStyle: {
      fontSize: 42,
      padding: 0,
	  
    },
	style: {
      backgroundColor: '#12D0FD',
    }
  }
});

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign Up"
    }
  },
});

export const RootNavigator = (signedIn = false) => {
  return createStackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    }, {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};