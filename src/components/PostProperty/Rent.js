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
  const [clickPG, setClickPG] = useState(false);
  const [clickHouseVilla, setClickHouseVilla] = useState(false);
  const [clickFlat, setClickFlat] = useState(false);
  const [clickWorkspace, setClickWorkspace] = useState(false);
  const [clickPlot, setClickPlot] = useState(false);
  const [clickShopShowroom, setClickShopShowroom] = useState(false);
  const [clickOther, setClickOther] = useState(false);

  //const [] = useState(0.2);

  const [clickMen, setClickMen] = useState(false);
  const [clickFamily, setClickFamily] = useState(false);
  const [clickWoman, setClickWoman] = useState(false);
  const [clickBoth, setClickBoth] = useState(false);

  useEffect(() => {}, [props, isFocused]);

  const onClickPG = () => {
    console.log('onClickPG');
    setClickPG(true);
    setClickWorkspace(false);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(false);
  };

  const onClickHouseVilla = () => {
    console.log('onClickHoseVilla');
    setClickHouseVilla(true);
    setClickFlat(false);
    setClickWorkspace(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(false);
    setClickPG(false);
  };

  const onClickFlat = () => {
    console.log('onClickFlat');
    setClickFlat(true);
    setClickHouseVilla(false);
    setClickWorkspace(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(false);
    setClickPG(false);
  };

  const onClickWorkspace = () => {
    console.log('onClickWorkspace');
    setClickWorkspace(true);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(false);
    setClickPG(false);
  };

  const onClickPlot = () => {
    console.log('onClickPlot');
    setClickWorkspace(false);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(true);
    setClickShopShowroom(false);
    setClickOther(false);
    setClickPG(false);
  };

  const onClickShopShowroom = () => {
    console.log('onClickShopShowroom');
    setClickWorkspace(false);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(false);
    setClickShopShowroom(true);
    setClickOther(false);
    setClickPG(false);
  };

  const onClickOther = () => {
    console.log('onClickOther');
    setClickWorkspace(false);
    setClickHouseVilla(false);
    setClickFlat(false);
    setClickPlot(false);
    setClickShopShowroom(false);
    setClickOther(true);
    setClickPG(false);
  };

  const onClickFamily = () => {
    console.log('onClickFamily');
    setClickFamily(true);
    setClickMen(false);
    setClickWoman(false);
    setClickBoth(false);
  };

  const onClickMen = () => {
    console.log('onClickMen');
    setClickFamily(false);
    setClickMen(true);
    setClickWoman(false);
    setClickBoth(false);
  };

  const onClickWoman = () => {
    console.log('onClickWoman');
    setClickFamily(false);
    setClickMen(false);
    setClickWoman(true);
    setClickBoth(false);
  };

  const onClickBoth = () => {
    console.log('onClickBoth');
    setClickFamily(false);
    setClickMen(false);
    setClickWoman(false);
    setClickBoth(true);
  };
  return (
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
                clickPG == true
                  ? {backgroundColor: '#FCB427'}
                  : {backgroundColor: '#FFFFFF'},
              ]}
              onPress={onClickPG}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../assests/images/home.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.textTypeOfProperty}>PG</Text>
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

      <Text style={styles.componentHeadertext}>WILL RENT OUT TO</Text>

      {clickPG == true || clickHouseVilla == true ? (
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {clickHouseVilla == true ? (
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
                    clickFamily == true
                      ? {backgroundColor: '#FCB427'}
                      : {backgroundColor: '#FFFFFF'},
                  ]}
                  onPress={onClickFamily}>
                  <Image
                    style={{width: 40, height: 40}}
                    source={require('../../assests/images/family.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={styles.textTypeOfProperty}>FAMILY</Text>
              </View>
            ) : null}

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
                  clickMen == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickMen}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/man.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>MEN</Text>
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
                  clickWoman == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickWoman}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/woman.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Text style={styles.textTypeOfProperty}>WOMEN</Text>
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
                  clickBoth == true
                    ? {backgroundColor: '#FCB427'}
                    : {backgroundColor: '#FFFFFF'},
                ]}
                onPress={onClickBoth}>
                <Image
                  style={{width: 40, height: 40}}
                  source={require('../../assests/images/high-five.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text style={styles.textTypeOfProperty}>BOTH</Text>
            </View>
          </ScrollView>
        </View>
      ) : null}

      {/* <View>
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
                clickFamily == true
                  ? {backgroundColor: '#FCB427'}
                  : {backgroundColor: '#FFFFFF'},
              ]}
              onPress={onClickFamily}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../assests/images/family.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.textTypeOfProperty}>FAMILY</Text>
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
                clickMen == true
                  ? {backgroundColor: '#FCB427'}
                  : {backgroundColor: '#FFFFFF'},
              ]}
              onPress={onClickMen}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../assests/images/man.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.textTypeOfProperty}>MEN</Text>
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
                clickWoman == true
                  ? {backgroundColor: '#FCB427'}
                  : {backgroundColor: '#FFFFFF'},
              ]}
              onPress={onClickWoman}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../assests/images/woman.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={styles.textTypeOfProperty}>WOMEN</Text>
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
                clickBoth == true
                  ? {backgroundColor: '#FCB427'}
                  : {backgroundColor: '#FFFFFF'},
              ]}
              onPress={onClickBoth}>
              <Image
                style={{width: 40, height: 40}}
                source={require('../../assests/images/high-five.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.textTypeOfProperty}>BOTH</Text>
          </View>
        </ScrollView>
      </View> */}

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
          onPress={() => console.log('Upload from rent post property')}>
          <Text style={styles.textColor}>UPLOAD</Text>
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
    color: '#373F65',
    fontSize: 12,
    marginLeft: 16,
    fontFamily: 'arial-bold',
  },
  componentHeadertext1: {
    marginVertical: 9,
    color: '#373F65',
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
