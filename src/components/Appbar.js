import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import FA5Icon from 'react-native-vector-icons/FontAwesome';

import Ant from 'react-native-vector-icons/AntDesign';
export default function Appbar(props) {
  //const onPress = () => props.navigation.openDrawer();
  const onPress = () => console.log('on Pressbar');
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);
  return (
    <View style={styles.appBarContainer}>
      <TouchableOpacity onPress={onPress}>
        <FA5Icon
          name="bars"
          color="black"
          size={15}
          style={{justifyContent: 'flex-start'}}
        />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.titleText}>LIVING </Text>
        <Text style={styles.titleText1}>CHOOSE </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PostProperty')}>
          <Text style={styles.titleText2}>POST PROPERTY </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FDB527',
    height: 40,
    //marginTop: 5,
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'arlrdbd',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  titleText1: {
    color: '#354166',
    fontSize: 13,
    fontFamily: 'arlrdbd',
    fontWeight: 'bold',
    //marginLeft: 5,
  },
  titleText2: {
    color: '#373F65',
    fontSize: 13,
    fontFamily: 'arial-bold',
    fontWeight: 'bold',
    marginLeft: 100,
    marginRight: 16,
  },
});
