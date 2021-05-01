import React, {useEffect} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import styled from 'styled-components/native';
import Appbar from '../components/Appbar';

const {width} = Dimensions.get('window');

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const Whishlist = props => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  const onPressSearchProperty = () => {
    console.log('onPressSearchProperty');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Appbar />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 7,
        }}>
        <TouchableOpacity
          style={[styles.buttonContainer]}
          //onPress={onPressBuy}
        >
          <Text style={styles.textColor}>Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer]}
          //onPress={onPressBuy}
        >
          <Text style={styles.textColor}>Rent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonContainer]}
          //onPress={onPressBuy}
        >
          <Text style={styles.textColor}>Commercial</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Image
          source={require('../assests/images/empty_wishlist.png')}
          style={{width: '100%', height: '40%', marginTop: '50%'}}
          resizeMode="contain"
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Text
            style={{color: '#5A5A5A', fontSize: 15, fontFamily: 'arial-bold'}}>
            No Property shortlisted yet
          </Text>

          <TouchableOpacity
            style={[styles.buttonContainerSearch]}
            onPress={() => props.navigation.navigate('Search')}>
            <Text style={styles.textColor}>Search Property</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonContainerSearch: {
    alignItems: 'center',
    backgroundColor: '#FDB527',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 13,
    justifyContent: 'center',
    marginTop: 17,
    height: 35,
    width: width * 0.34933333333,
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
    color: '#2F2E2E',
    fontSize: 12,
    fontFamily: 'arial-bold',
    marginVertical: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 13,
    width: width * 0.19466666666,
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
});
export default Whishlist;
