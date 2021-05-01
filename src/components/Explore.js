import React, {useEffect} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Card} from 'native-base';

export default function Explore(props) {
  const isFocused = useIsFocused();

  const dataExplore = [
    {
      name: 'Renting a house',
      image: 'https://static.toiimg.com/photo/msid-69146268/69146268.jpg?92242',
    },
    {
      name: `Selling/ 
      renting your property`,
      image:
        'https://timesofindia.indiatimes.com/thumb/msid-81651702,imgsize-34569,width-400,resizemode-4/81651702.jpg',
    },
    {
      name: 'Buying a House',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_fOwkvXug5mh0LEThnNOSE5z2aCAJkiozg&usqp=CAU',
    },
    {
      name: 'PG and co-living',
      image:
        'https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg',
    },

    {
      name: `Lease
      commercial property`,
      image: 'https://static.toiimg.com/photo/msid-69146268/69146268.jpg?92242',
    },
    {
      name: `Buy 
      commercial property`,
      image:
        'https://timesofindia.indiatimes.com/thumb/msid-81651702,imgsize-34569,width-400,resizemode-4/81651702.jpg',
    },
  ];

  const {height, width} = Dimensions.get('window');

  useEffect(() => {}, [props, isFocused]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          //marginHorizontal: 15,
          //marginVertical: 15,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            //marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => console.log('Print Out')}
            activeOpacity={1}>
            <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
              }}
              resizeMode="cover"
            />

            <Text style={styles.textGrid}>Renting a house</Text>
          </TouchableOpacity>
        </View>

        {/* One */}

        <View
          style={{
            flexDirection: 'column',
            //marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => console.log('Print Out')}
            activeOpacity={1}>
            <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg',
              }}
              resizeMode="cover"
            />

            <Text style={styles.textGrid}>{`Selling/ 
renting your property`}</Text>
          </TouchableOpacity>
        </View>

        {/* two */}

        <View
          style={{
            flexDirection: 'column',
            //marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => console.log('Print Out')}
            activeOpacity={1}>
            <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://www.tastefulspace.com/wp-content/uploads/2019/01/5-Home-Improvement-Tasks-You-Should-Never-Attempt-to-DIY.jpeg',
              }}
              resizeMode="cover"
            />

            <Text style={styles.textGrid}>{`Lease
commercial property`}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //marginHorizontal: 15,
          //marginVertical: 15,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'column',
            //marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => console.log('Print Out')}
            activeOpacity={1}>
            <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://www.indiabullsrealestate.com/wp-content/uploads/2016/12/one-09-gurgaon-commercial.jpg',
              }}
              resizeMode="cover"
            />

            <Text style={styles.textGrid}>{`Lease
commercial property`}</Text>
          </TouchableOpacity>
        </View>

        {/* One */}

        <View
          style={{
            flexDirection: 'column',
            //marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => console.log('Print Out')}
            activeOpacity={1}>
            <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://mediacdn.99acres.com/media1/14439/14/288794728M-1616221484529.jpeg',
              }}
              resizeMode="cover"
            />

            <Text style={styles.textGrid}>{`Selling/ 
renting your property`}</Text>
          </TouchableOpacity>
        </View>

        {/* two */}

        <View
          style={{
            flexDirection: 'column',
            //marginHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => console.log('Print Out')}
            activeOpacity={1}>
            <Image
              style={styles.imageContainer}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
              }}
              resizeMode="cover"
            />

            <Text style={styles.textGrid}>{`Buy Commercial 
property`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  formContent: {
    flexDirection: 'row',
    margin: 15,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 25,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  cardStyle: {
    width: width * 0.85285333333,
    //height: height * 0.07194244604,
    backgroundColor: '#FFFFFFE6',
    borderWidth: 1,
    borderColor: '#F7F7F7',
  },
  cardContainer: {
    width: 110,
    height: 120,
    borderRadius: 10,
    alignItems: 'center',
    //margin: 15,
    backgroundColor: '#9AD9F7',
  },
  imageContainer: {
    //width: width * 0.22666666666,
    //height: width * 0.22666666666,
    width: 90,
    height: 90,
    margin: 10,
    borderRadius: 10,
  },
  textGrid: {
    fontSize: 9,
    fontFamily: 'arial-bold',
    color: '#5A5A5A',
    textAlign: 'center',
  },
});
