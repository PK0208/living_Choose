import React, {useEffect} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AppBar from '../components/Appbar';
import styled from 'styled-components/native';
import LivingChooseExclusive from '../components/LivingChooseExclusive';

const {width} = Dimensions.get('window');

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const Profile = props => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AppBar navigation={props.navigation} />
      <Container>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 14,
          }}>
          <Text
            style={{color: '#434343', fontSize: 18, fontFamily: 'arial-bold'}}>
            My Profile
          </Text>
        </View>
        <View style={styles.container1}>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Image
              style={styles.productImg}
              source={require('../assests/images/profileImg.png')}
            />
            <Text style={styles.name}>John Williams</Text>
            <Text style={styles.email}>JohnWilliams@Williams.com</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 27,
            }}>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.sendButton]}
              onPress={() => props.navigation.navigate('EditProfile')}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'arial-bold',
                  fontSize: 9,
                }}>
                EDIT PROFILE
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonContainerS, styles.sendButtonS]}
              onPress={() => props.navigation.navigate('Settings')}>
              <Text
                style={{
                  color: '#1C1C1C',
                  fontFamily: 'arial-bold',
                  fontSize: 10,
                }}>
                SETTINGS
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.leadsText}>DAILY UPDATES </Text> */}
          {/* <View style={{margin: 5}}>
            <Image
              style={{
                width: '100%',
                height: '40%',
              }}
              source={{
                uri:
                  'https://camo.githubusercontent.com/417bd9360f072f73ff7292ad051eb1fbf8cf096c48f9881d396ec01d4ecc15d6/68747470733a2f2f692e696d6775722e636f6d2f57743236736e642e6a7067',
              }}
              resizeMode="cover"
            />
          </View> */}
          <Text style={styles.leadsText}>SUBSCRIPTION PLANS</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15.5,
            }}>
            <View></View>

            <LinearGradient
              colors={['#8FE384', '#487242']}
              style={{
                width: width * 0.28533333333,
                flexDirection: 'column',
                borderRadius: 10,
                backgroundColor: '#EB6F80',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 23}}>₹99</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  width: '80%',
                }}></View>
              <Text style={{color: 'white', marginTop: 10, fontSize: 11}}>
                BASIC
              </Text>
              <View>
                <Text style={{marginTop: 7, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
                <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
                <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.buttonContainerBasic, styles.sendButtonBasic]}
                onPress={() => console.log('Buy')}>
                <Text
                  style={{
                    color: '#619A59',
                    fontFamily: 'arial-bold',
                    fontSize: 10,
                  }}>
                  BUY
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#9B38D2', '#39154D']}
              style={{
                width: width * 0.28533333333,
                flexDirection: 'column',
                borderRadius: 10,
                backgroundColor: '#EB6F80',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 23}}>₹199</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  width: '80%',
                }}></View>
              <Text style={{marginTop: 10, color: 'white', fontSize: 11}}>
                PREMIUM
              </Text>
              <View>
                <Text style={{marginTop: 7, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
                <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
                <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.buttonContainerBasic, styles.sendButtonBasic]}
                onPress={() => console.log('Buy')}>
                <Text
                  style={{
                    color: '#619A59',
                    fontFamily: 'arial-bold',
                    fontSize: 10,
                  }}>
                  BUY
                </Text>
              </TouchableOpacity>
            </LinearGradient>

            <LinearGradient
              colors={['#EB6F80', '#763840']}
              style={{
                width: width * 0.28533333333,
                flexDirection: 'column',
                borderRadius: 10,
                backgroundColor: '#EB6F80',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 23}}>₹299</Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#FFFFFF',
                  width: '80%',
                }}></View>
              <Text style={{marginTop: 10, color: 'white', fontSize: 11}}>
                ULTMATE
              </Text>
              <View>
                <Text style={{marginTop: 7, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
                <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
                <Text style={{marginTop: 4, color: 'white', fontSize: 6}}>
                  X Number of uploads
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.buttonContainerBasic, styles.sendButtonBasic]}
                onPress={() => console.log('Buy')}>
                <Text
                  style={{
                    color: '#619A59',
                    fontFamily: 'arial-bold',
                    fontSize: 10,
                  }}>
                  BUY
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 5,
          }}>
          <Text style={styles.bottomText}>About us</Text>
          <View
            style={{borderWidth: 1, borderColor: '#707070', margin: 5}}></View>
          <Text style={styles.bottomText}>T & C</Text>
        </View> */}

        <Text style={styles.leadsText}>LEADS</Text>
        {/* <View
          style={{
            borderWidth: 1,
            borderColor: '#00000029',
            width: width * 0.912,
            marginLeft: 16,
            marginRight: 16,
            marginTop: 12,
            shadowColor: '#00000029',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
            borderWidth: 0.5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
              marginVertical: 15,
              marginHorizontal: '25%',
              //paddingHorizontal: '15%',
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
                marginLeft: -20,
              }}>
              <Text style={styles.bottomText}>Todays leads</Text>
              <Text style={styles.bottomTextDown}>9</Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#707070',
                margin: 5,
              }}></View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Text style={styles.bottomText}>Monthly leads</Text>
              <Text style={styles.bottomTextDown}>18</Text>
            </View>
          </View>
        </View> */}

        <View style={styles.ridesFriends}>
          <View style={{flexDirection: 'column', alignContent: 'stretch'}}>
            <Text style={styles.bottomText}>Todays leads</Text>
            <Text style={styles.bottomTextDown}>9</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.bottomText}>Monthly leads</Text>
            <Text style={styles.bottomTextDown}>9</Text>
          </View>
        </View>
        <Text style={styles.leadsText}>RUNNING ADS</Text>
        <LivingChooseExclusive navigation={props.navigation} />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cardStyle: {
    backgroundColor: '#0D1F33',
    //padding: 10,
    //marginLeft: 0,
    //marginRight: 0,
    //marginTop: 0,
  },
  container1: {
    flex: 1,
    marginTop: 15,
  },
  productImg: {
    width: 117,
    height: 117,
    borderRadius: 117 / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  name: {
    fontSize: 19,
    color: '#5A5A5A',
    //fontWeight: 'bold',
    fontFamily: 'arial-bold',
    //marginHorizontal: 10,
    //marginVertical: 10,
    marginTop: 15,
  },
  rightText: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'HelveticaNeue Regular',
    color: '#EBE8E8',
    //fontWeight: '700',
  },
  leftText: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'HelveticaNeue Regular',
    color: '#EBE8E8',
    //fontWeight: '700',
  },
  bottomText: {
    fontSize: 10,
    fontFamily: 'Avenir Black',
    color: '#000000',
    //paddingVertical: 40,
  },
  bottomTextDown: {
    fontSize: 30,
    color: '#555555',
    fontFamily: 'Avenir Black',
    paddingHorizontal: 15,
    margin: 5,
  },
  email: {
    color: '#5A5A5A',
    fontSize: 11,
    fontFamily: 'Arial regular',
    marginTop: 7,
  },
  buttonContainer: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.30058666666,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    //marginTop: height * 0.34002361275 * 2.2,
    backgroundColor: '#FFFFFF',
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonContainerS: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.30058666666,
    borderRadius: 5,
    //borderColor: '#FFFFFF',
    //borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    //marginTop: height * 0.34002361275 * 2.2,
    backgroundColor: '#FFFFFF',
  },
  sendButtonS: {
    backgroundColor: '#FDB527',
  },

  buttonContainerBasic: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: width * 0.192,
    borderRadius: 15,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    elevation: 6,
    marginTop: 13,
    backgroundColor: '#FFFFFF',
  },
  sendButtonBasic: {
    backgroundColor: '#FFFFFF',
  },
  leadsText: {
    color: '#000000',
    fontSize: 11,
    fontFamily: 'arial-bold',
    marginTop: 27,
    marginLeft: 13,
    marginBottom: 10,
  },
  ridesFriends: {
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    //borderWidth: 0.25,
    shadowColor: '#00000041',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 1,
    marginLeft: 15,
    borderColor: '#00000041',
    elevation: 1,
  },
  numbers: {
    fontSize: 30,
    color: '#31C283',
    fontWeight: 'bold',
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
});
export default Profile;
