import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styled from 'styled-components/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';

const Container = styled.ScrollView`
  background-color: #ffffff;
`;

export default function Rent(props) {
  const isFocused = useIsFocused();

  const [] = useState('#FCB427');
  const [] = useState('#FFFFFF');
  const [clickHouseVilla, setClickHouseVilla] = useState(false);
  const [clickFlat, setClickFlat] = useState(false);
  const [clickWorkspace, setClickWorkspace] = useState(false);
  const [clickPlot, setClickPlot] = useState(false);
  const [clickShopShowroom, setClickShopShowroom] = useState(false);
  const [clickOther, setClickOther] = useState(false);

  //const [] = useState(0.2);

  const [click1RK, setClick1RK] = useState(false);
  const [click1BHK, setClick1BHK] = useState(false);
  const [click2BHK, setClick2BHK] = useState(false);
  const [click3BHK, setClick3BHK] = useState(false);
  const [click4BHK, setClick4BHK] = useState(false);
  const [click4plusBHK, setClick4plusBHK] = useState(false);

  useEffect(() => {}, [props, isFocused]);

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

  const onClick1RK = () => {
    setClick1RK(true);
  };

  const onClick1BHK = () => {
    setClick1BHK(true);
  };

  const onClick2BHK = () => {
    setClick2BHK(true);
  };

  const onClick3BHK = () => {
    setClick3BHK(true);
  };

  const onClick4BHK = () => {
    setClick4BHK(true);
  };

  const onClick4PlusBHK = () => {
    setClick4plusBHK(true);
  };

  return (
    <Container>
      <Text style={styles.componentHeadertext}>Landmark/Locality/PROJECT</Text>

      <View style={styles.textinputContainer}>
        <AntIcon name="search1" color="#525252" size={20} />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search in a city, Locality, Project or Landmark"
        />
      </View>

      <Text style={styles.componentHeadertext1}>Looking For</Text>
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
                source={require('../assests/images/villa.png')}
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
                source={require('../assests/images/building.png')}
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
                source={require('../assests/images/office.png')}
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
                source={require('../assests/images/architect.png')}
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
                source={require('../assests/images/shop.png')}
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
                source={require('../assests/images/location.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.textTypeOfProperty}>Other</Text>
          </View>
        </ScrollView>
      </View>

      <Text style={styles.componentHeadertext1}>Number of Bedrooms</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 5,
        }}>
        <TouchableOpacity
          style={[
            styles.buttonContainer2,
            click1RK == true
              ? {backgroundColor: '#FCB427'}
              : {backgroundColor: '#FFFFFF'},
          ]}
          onPress={onClick1RK}>
          <Text style={styles.textColor2}>1RK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer2,
            click1BHK == true
              ? {backgroundColor: '#FCB427'}
              : {backgroundColor: '#FFFFFF'},
          ]}
          onPress={onClick1BHK}>
          <Text style={styles.textColor2}>1BHK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer2,
            click2BHK == true
              ? {backgroundColor: '#FCB427'}
              : {backgroundColor: '#FFFFFF'},
          ]}
          onPress={onClick2BHK}>
          <Text style={styles.textColor2}>2BHK</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 5,
        }}>
        <TouchableOpacity
          style={[
            styles.buttonContainer2,
            click3BHK == true
              ? {backgroundColor: '#FCB427'}
              : {backgroundColor: '#FFFFFF'},
          ]}
          onPress={onClick3BHK}>
          <Text style={styles.textColor2}>3BHK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer2,
            click4BHK == true
              ? {backgroundColor: '#FCB427'}
              : {backgroundColor: '#FFFFFF'},
          ]}
          onPress={onClick4BHK}>
          <Text style={styles.textColor2}>4BHK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonContainer2,
            click4plusBHK == true
              ? {backgroundColor: '#FCB427'}
              : {backgroundColor: '#FFFFFF'},
          ]}
          onPress={onClick4PlusBHK}>
          <Text style={styles.textColor2}>4+BHK</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.componentHeadertext1}>Range</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Slider
          style={{width: '80%', height: 20}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={'#FFCE98'}
          maximumTrackTintColor={'#FFCE98'}
          thumbTintColor={'#FDB527'}
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
          onPress={() => console.log('Search')}>
          <Text style={styles.textColor}>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  textinputContainer: {
    borderColor: '#707070',
    borderRadius: 17,
    borderWidth: 0.25,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    height: 40,
    width: width * 0.936,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 11,
    flexDirection: 'row',
  },
  componentHeadertext: {
    marginTop: 15,
    color: '#000000',
    fontSize: 12,
    marginLeft: 16,
    fontFamily: 'arial-bold',
  },
  componentHeadertext1: {
    marginVertical: 9,
    color: '#000000',
    fontSize: 12,
    marginLeft: 16,
    fontFamily: 'arial-bold',
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDB527',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 13,
    width: width * 0.888,
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
  buttonContainer2: {
    alignItems: 'center',
    backgroundColor: '#F5AF25',
    borderRadius: 8,
    width: width * 0.22666666666,
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#00000029',
  },
  textColor2: {
    color: '#404040',
    fontSize: 12,
    fontFamily: 'arial-bold',
  },
});
