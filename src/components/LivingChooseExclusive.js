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
import {Card} from 'native-base';

import Ant from 'react-native-vector-icons/AntDesign';
export default function LivingChooseExclusive(props) {
  //const onPress = () => props.navigation.openDrawer();
  const onPress = () => console.log('on Pressbar');
  const isFocused = useIsFocused();

  const propertyData = [
    {
      id: 1,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },
    {
      id: 2,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },
    {
      id: 3,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },
    {
      id: 4,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },

    {
      id: 5,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },
    {
      id: 6,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },
    {
      id: 133,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },
    {
      id: 7,
      name: 'Cyber Meadows, Kondapur',
      place: 'Hyderabad, Telangana 500084',
      bedrooms: '3 Bedrooms',
      hall: '1 Hall',
      kitchen: '1 Kitchen',
      parking: 'car parking',
      image:
        'https://mod-movers.com/wp-content/uploads/2020/06/webaliser-_TPTXZd9mOo-unsplash-300x225.jpg',
    },
  ];

  useEffect(() => {
    //console.log('LivingChooseExclusive', props);
  }, [props, isFocused]);
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft: 13}}>
        {propertyData.map((item, i) => {
          return (
            <Card
              key={item.id}
              style={{
                width: width * 0.86133333333,
                shadowColor: 'white',
                marginRight: 15,
                backgroundColor: 'white',
                elevation: 4,
                borderRadius: 16,
              }}>
              <View style={{position: 'relative', flexDirection: 'column'}}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: width * 0.86133333333,
                    height: 143,
                    borderRadius: 16,
                  }}
                  resizeMode="cover"
                />

                <View
                  style={{
                    flexDirection: 'column',
                    marginVertical: 5,
                    marginLeft: 12,
                  }}>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={styles.nameText}>{item.place}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 12,
                  }}>
                  <Text style={styles.propertyDetailsText}>
                    {item.bedrooms}
                  </Text>
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      borderColor: '#898989',
                      height: 10,
                    }}></View>
                  <Text style={styles.propertyDetailsText}>{item.hall}</Text>
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      borderColor: '#898989',
                      height: 10,
                    }}></View>
                  <Text style={styles.propertyDetailsText}>{item.kitchen}</Text>
                  <View
                    style={{
                      borderRightWidth: 0.5,
                      borderColor: '#898989',
                      height: 5,
                    }}></View>
                  <Text style={styles.propertyDetailsText}>{item.parking}</Text>
                  <TouchableOpacity
                    style={[styles.buttonContainerLC]}
                    onPress={() => props.navigation.navigate('PropertByName')}>
                    <Text style={styles.textColorLC}>Call Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonContainerLC: {
    alignItems: 'center',
    marginLeft: width * 0.11733333333,
    backgroundColor: '#FDB527',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 6,
    width: width * 0.21333333333,
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
    marginBottom: 10,
  },
  textColorLC: {
    color: '#313131',
    fontSize: 10,
    fontFamily: 'arial-bold',
  },
  nameText: {
    color: '#555454',
    fontSize: 8,
    fontFamily: 'arial-bold',
    marginHorizontal: 3,
  },
  propertyDetailsText: {
    color: '#898989',
    fontSize: 8,
    fontFamily: 'arial-bold',
    marginHorizontal: 2,
    marginVertical: 3,
  },
});
