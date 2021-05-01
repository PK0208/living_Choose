import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';

import Appbar from '../components/Appbar';
import Buy from '../components/Buy';
import Rent from '../components/Rent';
import Commercial from '../components/Commercial';
import PG from '../components/PG';

import {useIsFocused} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

import styled from 'styled-components/native';
const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const Search = props => {
  const isFocused = useIsFocused();
  const [activeColor] = useState('#E9A723');
  const [inactiveColor] = useState('#FFFFFF');
  const [clickBuy, setClickBuy] = useState(false);
  const [clickRent, setClickRent] = useState(false);
  const [clickCommercial, setClickCommercial] = useState(false);
  const [clickPG, setClickPG] = useState(false);
  useEffect(() => {
    //setActiveColor('#E9A723');
    //setInActiveColor('#FFFFFF');
    setClickBuy(true);
  }, [props, isFocused]);

  const onPressBuy = () => {
    console.log('OnPressBuy');
    setClickBuy(true);
    console.log('OnPressBuyState', clickBuy);
    setClickRent(false);
    setClickCommercial(false);
    setClickPG(false);
  };

  const onPressRent = () => {
    console.log('OnPressRent');
    setClickRent(true);
    setClickBuy(false);
    setClickCommercial(false);
    setClickPG(false);
  };

  const onPressCommercial = () => {
    console.log('onPressCommercial');
    setClickCommercial(true);
    setClickPG(false);
    setClickBuy(false);
    setClickRent(false);
  };

  const onPressPG = () => {
    console.log('onPressPG');
    setClickPG(true);
    setClickBuy(false);
    setClickRent(false);
    setClickCommercial(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Appbar navigation={props.navigation}></Appbar>
      <Container>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 14,
          }}>
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              clickBuy == true
                ? {backgroundColor: '#E9A723'}
                : {backgroundColor: '#FFFFFF'},
            ]}
            onPress={onPressBuy}>
            <Text style={styles.textColor}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              clickRent == true
                ? {backgroundColor: activeColor}
                : {backgroundColor: inactiveColor},
            ]}
            onPress={onPressRent}>
            <Text style={styles.textColor}>Rent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              clickCommercial == true
                ? {backgroundColor: activeColor}
                : {backgroundColor: inactiveColor},
            ]}
            onPress={onPressCommercial}>
            <Text style={styles.textColor}>Commercial</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.buttonContainer,
              clickPG == true
                ? {backgroundColor: activeColor}
                : {backgroundColor: inactiveColor},
            ]}
            onPress={onPressPG}>
            <Text style={styles.textColor}>PG</Text>
          </TouchableOpacity>
        </View>

        <View>{clickBuy == true ? <Buy /> : null}</View>
        <View>{clickRent == true ? <Rent /> : null}</View>
        <View>{clickCommercial == true ? <Commercial /> : null}</View>
        <View>{clickPG == true ? <PG /> : null}</View>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#FEDA93',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 13,
    //width: width * 0.21066666666,
    justifyContent: 'center',
    height: 23,
    borderColor: '#00000029',
    borderWidth: 0.5,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  textColor: {
    color: '#404040',
    fontSize: 10,
    fontFamily: 'arial-bold',
  },
});
export default Search;
