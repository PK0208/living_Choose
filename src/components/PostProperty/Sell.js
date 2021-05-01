import React, {useState, useEffect} from 'react';

import {
  StatusBar,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';
import {useIsFocused} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 95) / 100}px;
`;

const {height, width} = Dimensions.get('window');

const Sell = props => {
  const isFocused = useIsFocused();

  const [activeColor] = useState('#E9A723');
  const [inactiveColor] = useState('#FFFFFF');

  const [clickHouseVilla, setClickHouseVilla] = useState(false);
  const [clickFlat, setClickFlat] = useState(false);
  const [clickWorkspace, setClickWorkspace] = useState(false);
  const [clickPlot, setClickPlot] = useState(false);
  const [clickShopShowroom, setClickShopShowroom] = useState(false);
  const [clickOther, setClickOther] = useState(false);

  useEffect(() => {
    console.log('User effect props Buy');
  }, [props, isFocused]);

  const onClickHouseVilla = () => {
    console.log('onClickHoseVilla');
    setClickHouseVilla(true);
    setClickFlat(false);
    setClickWorkspace(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(false);
  };

  const onClickFlat = () => {
    console.log('onClickFlat');
    setClickFlat(true);
    setClickHouseVilla(false);
    setClickWorkspace(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(false);
  };

  const onClickWorkspace = () => {
    console.log('onClickWorkspace');
    setClickWorkspace(true);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(false);
  };

  const onClickPlot = () => {
    console.log('onClickPlot');
    setClickWorkspace(false);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(true);
    setClickShopShowroom(false);
    setClickOther(false);
  };

  const onClickShopShowroom = () => {
    console.log('onClickShopShowroom');
    setClickWorkspace(false);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(false);
    setClickShopShowroom(true);
    setClickOther(false);
  };

  const onClickOther = () => {
    console.log('onClickOther');
    setClickWorkspace(false);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(true);
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickHouseVilla == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickHouseVilla}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/villa.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>House / Villa</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickFlat == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickFlat}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/building.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Text style={styles.textTypeOfProperty}>Flat</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickWorkspace == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickWorkspace}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/office.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Workspace</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickPlot == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickPlot}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/architect.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Plot</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickShopShowroom == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickShopShowroom}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/shop.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Shop/ Showroom</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickOther == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickOther}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/location.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Other</Text>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.componentHeadertext}>UPLOAD PHOTOS</Text>
        <View
          style={{
            flexDirection: 'column',
            margin: 5,
          }}>
          <TouchableOpacity
            style={[
              styles.TouchableOpacityContainer,
              clickHouseVilla == true
                ? {backgroundColor: '#FCB427'}
                : {backgroundColor: '#FFFFFF'},
            ]}
            onPress={onClickHouseVilla}>
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assests/images/camera.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.componentHeadertext}>YOUR PROPERTY ADDRESS</Text>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            placeholder="City"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />

          <TextInput
            placeholder="Locality"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />

          <TextInput
            placeholder="Society or Project"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />

          <TextInput
            placeholder="H.no/ Street name"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          <TouchableOpacity
            style={[styles.buttonContainer]}
            onPress={() => console.log('Upload From Sell')}>
            <Text style={styles.textColor}>UPLOAD</Text>
          </TouchableOpacity>
        </View>
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
  TouchableOpacityContainer: {
    width: 73,
    height: 73,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#00000029',
  },
  textTypeOfProperty: {
    fontSize: 9,
    fontFamily: 'arial-bold',
    color: '#5C5C5C',
    //marginHorizontal: 5,
    margin: 5,
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
    justifyContent: 'center',
    backgroundColor: '#FDB527',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 13,
    width: width * 0.368,
    justifyContent: 'center',
    height: 53,
    borderColor: '#00000029',
    borderWidth: 0.5,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    marginBottom: 5,
  },
  textColor: {
    color: '#000000',
    fontSize: 13,
    fontFamily: 'arial-bold',
  },

  TextInputStyleClass: {
    height: 35,
    borderWidth: 1,
    borderColor: '#8E8E8E',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    width: '90%',
    margin: 5,
  },
});

export default Sell;
