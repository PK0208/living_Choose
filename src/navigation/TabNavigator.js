import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  SearchStacKNavigator,
  DownloadStacKNavigator,
  WishListStacKNavigator,
  ProfileStacKNavigator,
} from './StackNavigator';
import {StyleSheet} from 'react-native';

import Whishlist from '../../src/screens/Whishlist';

import Ant from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const name = '';

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({})}
      tabBarOptions={{
        activeTintColor: '#000000',
        activeBackgroundColor: '#FDB527',
        inactiveBackgroundColor: '#FDB527',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="home"
              size={20}
              //color={focused ? '#FFFFFF' : '#222222'}
              color="#BD871D"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="search1"
              size={20}
              //color={focused ? color : '#222222'}
              color="#BD871D"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Whishlist"
        component={Whishlist}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="hearto"
              size={20}
              //color={focused ? color : '#222222'}
              color="#BD871D"
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="user"
              size={20}
              color="#BD871D"
              //color={focused ? color : '#FFFFFF'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
