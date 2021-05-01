import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';

import EditProfile from '../screens/EditProfile';
import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';
import ChangePhoneNumber from '../screens/ChangePhoneNumber';
import PostProperty from '../screens/PostProperty';
import CompanyById from '../screens/CompanyById';
import PropertByName from '../screens/PropertByName';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

const AuStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? false : false) : null,
  });
  return <Stack.Navigator screenOptions={screenOptionStyle}></Stack.Navigator>;
};

const MainStackNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PostProperty" component={PostProperty} />
      <Stack.Screen name="CompanyById" component={CompanyById} />
      <Stack.Screen name="PropertByName" component={PropertByName} />
    </Stack.Navigator>
  );
};

const SearchStacKNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
      {/*  <Stack.Screen name="MovieByName" component={MovieByName} />
      <Stack.Screen name="PlayMovie" component={PlayMovie} />
      <Stack.Screen name="Teaser" component={Teaser} /> */}
    </Stack.Navigator>
  );
};

const DownloadStacKNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="Downloads" component={Downloads} />
      <Stack.Screen name="SeriesListDownload" component={SeriesListDownload} /> */}
    </Stack.Navigator>
  );
};

const WishListStacKNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="Whishlist" component={Whishlist} />
      <Stack.Screen name="Teaser" component={Teaser} /> */}
    </Stack.Navigator>
  );
};

const ProfileStacKNavigator = ({navigation, route}) => {
  navigation.setOptions({
    tabBarVisible: route.state ? (route.state.index > 0 ? true : true) : null,
  });
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Teaser" component={Teaser} /> */}
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} />
      <Stack.Screen name="PropertByName" component={PropertByName} />
    </Stack.Navigator>
  );
};

export {
  AuStackNavigator,
  MainStackNavigator,
  SearchStacKNavigator,
  DownloadStacKNavigator,
  WishListStacKNavigator,
  ProfileStacKNavigator,
};
