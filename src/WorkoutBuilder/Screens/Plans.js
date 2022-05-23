import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Plus from 'react-native-vector-icons/dist/FontAwesome';
import DataContext from '../../DataContext/DataContext';

const Plans = props => {
  const {plansCard} = useContext(DataContext);
  const navigation = props.navigation;
  const route = props.route;
  const [total, setTotal] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const a = await plansCard();
      setTotal(a);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.block}>
          {total.map(item => {
            

          
            return (
              <TouchableOpacity
                key={item._id}
                onPress={() => {
                  navigation.navigate('WorkoutDetail', item.Exercise);
                }}>
                <View style={Styles.ParenContainer}>
                  <View style={Styles.CardContainer}>
                    <Image
                      source={require('./../../WorkoutBuilder/Images/Dumbells.jpg')}
                      style={Styles.CardImage}
                    />
                    <View style={Styles.CardFooter}>
                      <Text style={Styles.CardTitle}>
                        {item.WorkoutType[0].workoutName} 
                      </Text>
                      <View style={Styles.inlineDetails}>
                        <Text style={Styles.cardDetails}>
                          Intensity-Level: {item.WorkoutType[0].intensity}
                        </Text>
                        <Text style={Styles.cardDetails}>
                          Type: {item.WorkoutType[0].targetMuscle}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* make a sticky round button with blue background in the bottom with a plus icon */}
      </ScrollView>
      <TouchableOpacity
        style={Styles.roundButton}
        onPress={() => {
          navigation.navigate('TrainingType');
        }}>
        <Plus name="plus" size={14} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  block: {
    color: 'white',
  },
  roundButton: {
    backgroundColor: '#0070ff',
    width: 55,
    height: 55,
    borderRadius: 50,
    position: 'absolute',
    bottom: 25,
    right: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.9,
    borderColor: '#E0E0E0',
    shadowColor: '#E0E0E0',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
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
export default Plans;
