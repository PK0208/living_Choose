import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';

import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';
import ChangePhoneNumber from '../screens/ChangePhoneNumber';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthStack.Navigator mode={'model'} screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={'Home'} component={TabNavigator} />
        <AuthStack.Screen name={'Settings'} component={Settings} />
        <AuthStack.Screen name={'ChangePassword'} component={ChangePassword} />
        <AuthStack.Screen
          name={'ChangePhoneNumber'}
          component={ChangePhoneNumber}
        />
      </AuthStack.Navigator>
    </>
  );
};

export default AuthStackNavigator;
