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
export default function PG(props) {
  const isFocused = useIsFocused();

  const [clickMen, setClickMen] = useState(false);
  const [clickWoman, setClickWoman] = useState(false);
  const [clickBoth, setclickBoth] = useState(false);

  const [clickSigle, setclickSingle] = useState(false);
  const [clickDouble, setclickDouble] = useState(false);
  const [clickTriple, setclickTriple] = useState(false);

  const onClickMen = () => {};

  const onClickWoman = () => {};

  const onClickBoth = () => {};

  const onClickSingle = () => {};

  const onClickDouble = () => {};

  const onClickTriple = () => {};

  useEffect(() => {}, [props, isFocused]);
  return (
    <View>
      <ScrollView>
        <Text style={styles.componentHeadertext}>
          Landmark/Locality/PROJECT
        </Text>
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
                marginHorizontal: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickMen == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickMen}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assests/images/man.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Men</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickWoman == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickWoman}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assests/images/woman.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Woman</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickBoth == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickBoth}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assests/images/high-five.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Both</Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.componentHeadertext1}>Occupancy Type</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickSigle == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickSingle}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assests/images/single-bed.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Single</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickDouble == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickDouble}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assests/images/single-bed.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Double</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 5,
              }}>
              <TouchableOpacity
                style={[
                  styles.TouchableOpacityContainer,
                  clickTriple == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickTriple}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../assests/images/single-bed.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>Triple</Text>
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
            style={[styles.buttonContainer]}
            onPress={() => console.log('Search')}>
            <Text style={styles.textColor}>SEARCH</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 15,
    color: '#000000',
    fontSize: 12,
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
  textColor: {
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
