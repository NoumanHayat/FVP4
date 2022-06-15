import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {Coaching as styles} from '../Style/index';
import {Divider} from 'react-native-paper';
import {ProgressView} from '@react-native-community/progress-view';

import DataContext from '../../DataContext/DataContext';
import LinearGradient from 'react-native-linear-gradient';

import * as Progress from 'react-native-progress';
// import {Divider} from 'react-native-paper';
const Coaching = props => {
  const [detail, setDetail] = useState({});
  const [user, setUser] = useState({});
  const [CheckInStatus, setCheckInStatus] = useState([]);
  const navigation = props.navigation;

  const {currentCalories, userDetails, weeklyCheckInStatus} =
    useContext(DataContext);
  useEffect(() => {
    async function fetchData() {
      const a = await currentCalories();
      const b = await weeklyCheckInStatus();
      setCheckInStatus(b);
      console.log(b);
      userDetails()
        .then(data => {
          setUser(data.data);
        })
        .catch(error => {});
      setDetail(a);
    }
    fetchData();
  }, []);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#ffff'}}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0.2, 0.6]}
        colors={['#1E81D4', '#11558D']}
        style={{flex: 1}}>
        <View style={styles.background}>
          <View style={styles.namePart}>
            <Text
              style={{
                fontSize: 35,
                padding: 10,
                color: '#ffff',
              }}>
              {user.Goal}
            </Text>

            <View style={styles.golesAndWeights}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#ffff',
                  textAlign: 'center',
                  paddingVertical: 3,
                }}>
                {user.weeklyGoal}KG/per week
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: '#ffff',
                  textAlign: 'center',
                  paddingVertical: 3,
                }}>
                Current weight:{user.Weight}KG
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.bottom}>
        <View style={styles.bottomContainer}>
          {/* ====================================================================================== */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#E7EEF7',
                  borderRadius: 16,
                  padding: 10,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.07,
                  shadowRadius: 4,
                  elevation: 2,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('chatBot');
                  }}>
                  <Image
                    resizeMode="cover"
                    source={require('../../assets/chat.png')}
                    style={{width: 114, height: 114}}
                  />
                  <View style={{padding: 10, justify: 'space-between'}}>
                    <Text style={{textAlign: 'center'}}>Chat Bot</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#E7EEF7',
                  borderRadius: 16,
                  marginLeft: 10,

                  padding: 10,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.07,
                  shadowRadius: 4,
                  elevation: 2,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('WorkoutDashboard');
                  }}>
                  <Image
                    resizeMode="cover"
                    source={require('../../assets/workout.png')}
                    style={{width: 114, height: 114}}
                  />
                  <View style={{padding: 10, justify: 'space-between'}}>
                    <Text style={{textAlign: 'center'}}>Workout Builder</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#E7EEF7',
                  borderRadius: 16,
                  padding: 10,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.07,
                  shadowRadius: 4,
                  elevation: 2,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('FoodRecommendations');
                  }}>
                  <Image
                    resizeMode="cover"
                    source={require('../../assets/food_rec.png')}
                    style={{width: 114, height: 114}}
                  />
                  <View style={{padding: 10, justify: 'space-between'}}>
                    <Text style={{textAlign: 'center'}}> Food Rec</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#E7EEF7',
                  borderRadius: 16,
                  marginLeft: 10,

                  padding: 10,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.07,
                  shadowRadius: 4,
                  elevation: 2,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('checkInHsitory');
                  }}>
                  <Image
                    resizeMode="cover"
                    source={require('../../assets/checkin_history.png')}
                    style={{width: 114, height: 114}}
                  />
                  <View style={{padding: 10, justify: 'space-between'}}>
                    <Text style={{textAlign: 'center'}}>CheckIn History</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.containerFourth}>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Total Check</Text>
              <Text style={styles.statusText}>{CheckInStatus.total}</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Next CheckIn in</Text>
              <Text style={styles.statusText}>
                {CheckInStatus.nextCheckIns} days
              </Text>
            </View>
          </View>
          <View style={styles.checkInButton}>
            {CheckInStatus.avalible ? (
              <TouchableOpacity
                style={{
                  backgroundColor: 'blue',
                  // width: 200,
                  // height: 40,
                  borderRadius: 15,
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}
                onPress={() => {
                  navigation.push('CheckIn1');
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Gill Sans',
                    textAlign: 'center',
                    margin: 10,
                    color: '#ffffff',
                    backgroundColor: 'transparent',
                  }}>
                  Check in
                </Text>
              </TouchableOpacity>
            ) : (
              <Text></Text>
            )}
          </View>

          {/* ========================================================================================== */}
        </View>
      </View>
    </ScrollView>
  );
};
export default Coaching;
