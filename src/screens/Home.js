import React, {useEffect} from 'react';

import {
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import {Card} from 'native-base';
import {useIsFocused} from '@react-navigation/native';
import Appbar from '../components/Appbar';

import styled from 'styled-components/native';

import AntIcon from 'react-native-vector-icons/AntDesign';
import Cities from '../components/Cities';
import Explore from '../components/Explore';
import LivingChooseExclusive from '../components/LivingChooseExclusive';
import Companies from '../components/Companies';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const {height, width} = Dimensions.get('window');

const Home = props => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('Home Screen Loaded');
    console.log('Height', height, 'Width', width);
  }, [props, isFocused]);

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

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Appbar navigation={props.navigation}></Appbar>

      <Container>
        <Image
          source={{
            uri:
              'https://img.freepik.com/free-photo/real-estate-broker-agent-presenting-consult-customer-decision-making-sign-insurance-form-agreement_1150-15023.jpg?size=664&ext=jpg',
          }}
          style={{width: '100%', height: 200}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 21,
          }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            //onPress={onPress}
          >
            <Text style={styles.textColor}>Buy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            //onPress={onPress}
          >
            <Text style={styles.textColor}>Rent</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            //onPress={() => props.navigation.navigate('PostProperty')}
          >
            <Text style={styles.textColor}>Commercial</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.textinputContainer}
          onPress={() => props.navigation.navigate('Search')}>
          <AntIcon name="search1" color="#525252" size={20} />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Search in a city, Locality, Project or Landmark"
            //onChangeText={}
            editable={false}
          />
        </TouchableOpacity>
        <Text style={styles.homeHeaderText}>Explorer</Text>
        <Explore />
        <Text style={styles.homeHeaderTextLCE}>Living Choose Exclusive</Text>
        {/* <LivingChooseExclusive /> */}
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
                      <Text style={styles.propertyDetailsText}>
                        {item.hall}
                      </Text>
                      <View
                        style={{
                          borderRightWidth: 0.5,
                          borderColor: '#898989',
                          height: 10,
                        }}></View>
                      <Text style={styles.propertyDetailsText}>
                        {item.kitchen}
                      </Text>
                      <View
                        style={{
                          borderRightWidth: 0.5,
                          borderColor: '#898989',
                          height: 5,
                        }}></View>
                      <Text style={styles.propertyDetailsText}>
                        {item.parking}
                      </Text>
                      <TouchableOpacity
                        style={styles.buttonContainerLC}
                        onPress={() =>
                          props.navigation.navigate('PropertByName')
                        }>
                        <Text style={styles.textColorLC}>Call Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              );
            })}
          </ScrollView>
        </View>
        <Text style={styles.homeHeaderText}>Cities</Text>
        <Cities />

        <Text style={styles.homeHeaderText}>Top Article on Home Buying</Text>

        <View
          style={{
            borderWidth: 1,
            borderColor: '#707070',
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            margin: 5,
          }}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/236x/4d/33/6c/4d336c8567818964ec5639db255d32d8.jpg',
            }}
            style={{width: '40%', height: 200}}
            resizeMode="cover"
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.headerParagraph}>Mark A. Edmunds</Text>
            <Text style={styles.textParagraph2}>San Luis Obispo</Text>
            {/* <Text styles={styles.textParagraph2}>San Luis Obispo</Text> */}
            <Text style={styles.textParagraph}>
              {`There were a number of suspicious 
elements to these acts. Each had only 
uploaded a handful of songs to their 
profile, all of which achieved very 
prevalent placings in first-party 
Spotify “mood” or “activity” playlists – 
such as Deep Focus, 
Sleep or Peaceful Piano, 
which count millions of followers 
on the platform.`}
            </Text>
          </View>
        </View>

        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 5}}>
          <Image
            source={require('../assests/images/Ad_1.png')}
            style={{width: '90%', height: 170}}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.homeHeaderText}>Latest property</Text>
        {/* <LivingChooseExclusive /> */}
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
                      <Text style={styles.propertyDetailsText}>
                        {item.hall}
                      </Text>
                      <View
                        style={{
                          borderRightWidth: 0.5,
                          borderColor: '#898989',
                          height: 10,
                        }}></View>
                      <Text style={styles.propertyDetailsText}>
                        {item.kitchen}
                      </Text>
                      <View
                        style={{
                          borderRightWidth: 0.5,
                          borderColor: '#898989',
                          height: 5,
                        }}></View>
                      <Text style={styles.propertyDetailsText}>
                        {item.parking}
                      </Text>
                      <TouchableOpacity
                        style={styles.buttonContainerLC}
                        onPress={() =>
                          props.navigation.navigate('PropertByName')
                        }>
                        <Text style={styles.textColorLC}>Call Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card>
              );
            })}
          </ScrollView>
        </View>

        <Text style={styles.homeHeaderText}>Top company’s</Text>
        {/* <Companies /> */}
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

        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <Image
            source={require('../assests/images/Ad_1.png')}
            style={{width: '90%', height: 170}}
            resizeMode="cover"
          />
        </View>

        {/*  <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center', margin: 10}}
          onPress={() => props.navigation.navigate('PropertByName')}>
          <Text>Hii</Text>
        </TouchableOpacity> */}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#FEDA93',
    //paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 13,
    width: width * 0.19466666666,
  },
  textColor: {
    color: '#404040',
    fontSize: 10,
    fontFamily: 'arial-bold',
  },
  textinputContainer: {
    borderColor: '#707070',
    borderRadius: 17,
    borderWidth: 1,
    height: 40,
    width: width * 0.85866666666,
    //justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  homeHeaderText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'arial-bold',
    marginLeft: 17,
    margin: 10,
  },
  homeHeaderTextLCE: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'arial-bold',
    marginLeft: 17,
    margin: 10,
    marginTop: 30,
  },
  headerParagraph: {
    color: '#313131',
    fontSize: 10,
    fontFamily: 'Arial Italic',
    marginLeft: 17,
    fontWeight: '600',
  },
  textParagraph2: {
    color: '#313131',
    fontSize: 7,
    fontFamily: 'Arial Italic',
    marginLeft: 16,
    fontWeight: '600',
    margin: 2,
  },
  textParagraph: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#313131',
    fontSize: 8,
    fontFamily: 'Arial Italic',
    marginLeft: 17,
    margin: 10,
    lineHeight: 12,
  },
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

export default Home;
