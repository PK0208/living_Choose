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

const Companies = (props, navigation) => {
  const isFocused = useIsFocused();

  const companiesData = [
    {
      id: 1,
      image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-tree-house-icon-logo-design-template-b26993e1ae4ee5e52765fe29177c3acd_screen.jpg?ts=1594582026',
    },
    {
      id: 2,
      image:
        'https://images-platform.99static.com/Vr0xE-h05WbBnmwo4NIeaCjJN4Y=/1020x1020:2030x2030/500x500/top/smart/99designs-contests-attachments/107/107179/attachment_107179564',
    },
    {
      id: 3,
      image: 'https://photos.zillowstatic.com/h_l/ISadkxgys0uedn1000000000.jpg',
    },
    {
      id: 4,
      image:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-tree-house-icon-logo-design-template-b26993e1ae4ee5e52765fe29177c3acd_screen.jpg?ts=1594582026',
    },
    {
      id: 5,
      image:
        'https://images-platform.99static.com/Vr0xE-h05WbBnmwo4NIeaCjJN4Y=/1020x1020:2030x2030/500x500/top/smart/99designs-contests-attachments/107/107179/attachment_107179564',
    },
    {
      id: 6,
      image: 'https://photos.zillowstatic.com/h_l/ISadkxgys0uedn1000000000.jpg',
    },
  ];

  useEffect(() => {}, [props, isFocused]);
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {companiesData.map(item => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('CompanyById', {id: item.id})
              }>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginHorizontal: 17,
                }}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: 85,
                    height: 85,
                    borderRadius: 15,
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
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

export default Companies;
