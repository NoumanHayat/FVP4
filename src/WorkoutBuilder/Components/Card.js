import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
const Card = ({navigation, route}) => {
  return (
    <View style={Styles.ParenContainer}>
      <View style={Styles.CardContainer}>
        <Image
          source={require('./../../WorkoutBuilder/Images/Dumbells.jpg')}
          style={Styles.CardImage}
        />
        <View style={Styles.CardFooter}>
          <Text style={Styles.CardTitle}>Workout One</Text>
          <View style={Styles.inlineDetails}>
            <Text style={Styles.cardDetails}>Intensity-Level: Intense</Text>
            <Text style={Styles.cardDetails}>Type: Power Lifting</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const Styles = StyleSheet.create({
  ParenContainer: {
    marginLeft: deviceWidth * 0.05,
    marginRight: deviceWidth * 0.05,
  },
  CardContainer: {
    marginVertical: 10,
    width: deviceWidth - 25,
    height: 210,
    backgroundColor: 'black',
    border: (1 * deviceWidth) / 100,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 9,
      height: 19,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  CardImage: {
    width: deviceWidth - 30,
    height: 150,
    borderRadius: 20,
  },
  CardFooter: {
    width: deviceWidth - 40,
    height: 60,
    paddingTop: 2,
    paddingLeft: 10,
  },
  CardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  inlineDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetails: {
    fontSize: 15,
    color: 'white',
  },
});
export default Card;
