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
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import FA5Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';
import AntIcon from 'react-native-vector-icons/AntDesign';
export default function Commercial(props) {
  const isFocused = useIsFocused();
  const [activeColor] = useState('#E9A723');
  const [inactiveColor] = useState('#FFFFFF');
  const [clickBuy, setClickBuy] = useState(false);
  const [clickRent, setClickRent] = useState(false);

  const [clickWorkspace, setClickWorkspace] = useState(false);
  const [clickCoWorkSpace, setClickCoWorkSpace] = useState(false);
  const [clickShopShowroom, setClickShopShowroom] = useState(false);
  const [clickOther, setClickOther] = useState(false);

  useEffect(() => {}, [props, isFocused]);

  const onRentPress = () => {
    console.log('onRentPress');
    setClickRent(true);
    setClickBuy(false);
  };

  const onBuyPress = () => {
    console.log('onBuyPress');
    setClickBuy(true);
    setClickRent(false);
  };

  const onClickWorkspace = () => {
    console.log('onClickWorkspace');
    setClickWorkspace(true);
    setClickCoWorkSpace(false);
    setClickShopShowroom(false);
    setClickOther(false);
  };

  const onClickCoWorkspace = () => {
    console.log('onClickCoWorkspace');
    setClickWorkspace(false);
    setClickCoWorkSpace(true);
    setClickShopShowroom(false);
    setClickOther(false);
  };

  const onClickShopShowroom = () => {
    console.log('onClickShopShowroom');
    setClickWorkspace(false);
    setClickCoWorkSpace(false);
    setClickShopShowroom(true);
    setClickOther(false);
  };

  const onClickOther = () => {
    console.log('onClickOther');
    setClickWorkspace(false);
    setClickCoWorkSpace(false);
    setClickShopShowroom(false);
    setClickOther(true);
  };

  return (
    <View>
      <Text style={styles.componentHeadertext}>Looking to</Text>
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
            clickRent == true
              ? {backgroundColor: activeColor}
              : {backgroundColor: inactiveColor},
          ]}
          onPress={onRentPress}>
          <Text style={styles.textColor}>RENT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            clickBuy == true
              ? {backgroundColor: activeColor}
              : {backgroundColor: inactiveColor},
          ]}
          onPress={onBuyPress}>
          <Text style={styles.textColor}>BUY</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.componentHeadertext2}>Landmark/Locality/PROJECT</Text>
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
                clickCoWorkSpace == true
                  ? {backgroundColor: '#FCB427'}
                  : {backgroundColor: '#FFFFFF'},
              ]}
              onPress={onClickCoWorkspace}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../assests/images/working.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.textTypeOfProperty}>CoWorking Space</Text>
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

      <Text style={styles.componentHeadertext1}>Range</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 15,
        }}>
        <Slider
          style={{width: '80%', height: 20}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={'#FFCE98'}
          maximumTrackTintColor={'#FFCE98'}
          thumbTintColor={'#FDB527'}
        />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={[styles.buttonContainer1]}
          onPress={() => console.log('Search')}>
          <Text style={styles.textColor1}>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const {height, width} = Dimensions.get('window');
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
    marginTop: 15,
    flexDirection: 'row',
  },
  componentHeadertext: {
    marginTop: 29,
    color: '#000000',
    fontSize: 12,
    marginLeft: 16,
    fontFamily: 'arial-bold',
  },
  componentHeadertext2: {
    marginTop: 23,
    color: '#000000',
    fontSize: 12,
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
  buttonContainer1: {
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
  },
  textColor1: {
    color: '#000000',
    fontSize: 13,
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
});
