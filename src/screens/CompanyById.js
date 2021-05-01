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
import Appbar from '../components/Appbar';
import LivingChooseExclusive from '../components/LivingChooseExclusive';

import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffffff;
`;

const CompanyById = props => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  const onPressSearchProperty = () => {
    console.log('onPressSearchProperty');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Appbar />
      <Container>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-tree-house-icon-logo-design-template-b26993e1ae4ee5e52765fe29177c3acd_screen.jpg?ts=1594582026',
            }}
            style={{
              width: width * 0.65866666666,
              height: width * 0.65866666666,
            }}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.headerText}>TREE HOUSE</Text>
        <Text style={styles.paragraphText}>
          Such generic music first came to the public’s attention in a big way a
          few years ago, when Spotify users noticed a number of bands they
          didn’t recognise in their end-of-year Wrapped list, the most common
          being an act with no profile picture called the “Bergenulo Five.” When
          these users listened back to the “top songs”, they discovered they
          were short, wordless and generic tunes, with names similar to those
          used by their own favourite bands. Some even thought their account had
          been hacked. But the real answer was much simpler — they had been
          tricked by the algorithm.
        </Text>

        <Text style={styles.headerText1}>Tree House Exclusive</Text>
        <LivingChooseExclusive />
        <Text style={styles.headerText1}>Upcoming Tree House</Text>
        <LivingChooseExclusive />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    color: '#3E3E3E',
    fontSize: 15,
    fontFamily: 'Arial-Bold-Italic',
    marginLeft: 20,
  },
  paragraphText: {
    color: '#3E3E3E',
    fontSize: 12,
    fontFamily: 'Arial Italic',
    marginLeft: 20,
    marginTop: 8,
  },
  headerText1: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'arial-bold',
    marginLeft: 20,
    marginTop: 20,
  },
});
export default CompanyById;
