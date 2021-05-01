import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import FA5Icon from 'react-native-vector-icons/FontAwesome';

import Ant from 'react-native-vector-icons/AntDesign';
export default function Cities(props) {
  //const onPress = () => props.navigation.openDrawer();
  const onPress = () => console.log('on Pressbar');
  const isFocused = useIsFocused();

  const citiesData = [
    {
      name: 'Hyderabad',
      image: 'https://static.toiimg.com/photo/msid-69146268/69146268.jpg?92242',
    },
    {
      name: 'Banglore',
      image:
        'https://timesofindia.indiatimes.com/thumb/msid-81651702,imgsize-34569,width-400,resizemode-4/81651702.jpg',
    },
    {
      name: 'Mumbai',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_fOwkvXug5mh0LEThnNOSE5z2aCAJkiozg&usqp=CAU',
    },
    {
      name: 'New Delhi',
      image:
        'https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg',
    },

    {
      name: 'Hyderabad',
      image: 'https://static.toiimg.com/photo/msid-69146268/69146268.jpg?92242',
    },
    {
      name: 'Banglore',
      image:
        'https://timesofindia.indiatimes.com/thumb/msid-81651702,imgsize-34569,width-400,resizemode-4/81651702.jpg',
    },
    {
      name: 'Mumbai',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_fOwkvXug5mh0LEThnNOSE5z2aCAJkiozg&usqp=CAU',
    },
    {
      name: 'New Delhi',
      image:
        'https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg',
    },
  ];

  useEffect(() => {}, [props, isFocused]);
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {citiesData.map(item => {
          return (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginHorizontal: 8,
              }}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 66 / 2,
                  borderWidth: 4,
                  borderColor: '#FAC58A',
                }}
              />
              <TouchableOpacity
                style={{
                  padding: 5,
                  borderWidth: 1,
                  backgroundColor: '#FDB527',
                  borderColor: '#FFC98D',
                  borderRadius: 6,
                }}>
                <Text
                  style={{
                    fontSize: 8,
                    fontFamily: 'arial-bold',
                    color: '#313131',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
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
    height: height * 0.082065217391,
    marginTop: 5,
  },
  titleText: {
    color: 'white',
    fontSize: 13,
    fontFamily: 'impact-regular',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  titleText1: {
    color: '#354166',
    fontSize: 13,
    fontFamily: 'impact-regular',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  titleText2: {
    color: '#373F65',
    fontSize: 13,
    fontFamily: 'impact-regular',
    fontWeight: 'bold',
    marginLeft: 100,
  },
});
