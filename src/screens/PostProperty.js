import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import AppBar from '../components/Appbar';
import Sell from '../components/PostProperty/Sell';
import Rent from '../components/PostProperty/Rent';

import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const {height, width} = Dimensions.get('window');

const PostProperty = props => {
  const isFocused = useIsFocused();
  const [activeColor] = useState('#E9A723');
  const [inactiveColor] = useState('#FFFFFF');
  const [clickSell, setclickSell] = useState(false);
  const [clickRent, setClickRent] = useState(false);

  useEffect(() => {
    console.log('User effect props Buy');
  }, [props, isFocused]);

  const onRentPress = () => {
    console.log('onRentPress');
    setClickRent(true);
    setclickSell(false);
  };

  const onSellPress = () => {
    console.log('onSellPress');
    setclickSell(true);
    setClickRent(false);
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <AppBar />
      <Container>
        <Text style={styles.componentHeadertext}>I WANT TO</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 16,
          }}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              clickSell == true
                ? {backgroundColor: activeColor}
                : {backgroundColor: inactiveColor},
            ]}
            onPress={onSellPress}>
            <Text style={styles.textColor}>SELL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              clickRent == true
                ? {backgroundColor: activeColor}
                : {backgroundColor: inactiveColor},
            ]}
            onPress={onRentPress}>
            <Text style={styles.textColor}>RENT</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.componentHeadertext}>YOUR PROPERTY TYPE</Text>
        {clickSell == true ? <Sell /> : null}
        {clickRent == true ? <Rent /> : null}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "orange"
    backgroundColor: '#0D1F33',
  },
  componentHeadertext: {
    marginTop: 15,
    color: '#373F65',
    fontSize: 11,
    marginLeft: 16,
    fontFamily: 'arial-bold',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#FEDA93',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 13,
    justifyContent: 'center',
    height: 35,
    borderColor: '#00000029',
    borderWidth: 0.5,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    width: width * 0.4,
  },
  textColor: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'arial-bold',
  },
});

export default PostProperty;
