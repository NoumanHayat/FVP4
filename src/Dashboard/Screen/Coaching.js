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
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0.2, 0.6]}
        colors={['#0E98F4', '#2DA4F4']}
        // colors={['#3C8CE7', '#00EAFF']}
        style={{flex: 1}}>
        <ScrollView>
          <View style={styles.namePart}>
            <Text
              style={{
                fontSize: 35,
                padding: 10,
                color: 'black',
                textAlign: 'center',
              }}>
              {user.Goal}
            </Text>

            <View style={styles.golesAndWeights}>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  textAlign: 'center',
                  paddingVertical: 3,
                }}>
                {user.weeklyGoal}KG/per week
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                  textAlign: 'center',
                  paddingVertical: 3,
                }}>
                Current weight:{user.Weight}KG
              </Text>
            </View>
          </View>

          <View style={styles.containerSecond}>
            <View style={styles.boxContainer}>
              <Text style={{fontSize: 23, color: 'black', textAlign: 'center'}}>
                Cals
              </Text>
              <Text style={{fontSize: 19, color: 'black', textAlign: 'center'}}>
                {parseInt(detail.Calories)}
              </Text>
            </View>
            <View style={styles.boxContainer}>
              <Text style={{fontSize: 23, color: 'black', textAlign: 'center'}}>
                Protein
              </Text>
              <Text style={{fontSize: 19, color: 'black', textAlign: 'center'}}>
                {parseInt(detail.Protein)}
              </Text>
            </View>
            <View style={styles.boxContainer}>
              <Text style={{fontSize: 23, color: 'black', textAlign: 'center'}}>
                Carbs
              </Text>
              <Text style={{fontSize: 19, color: 'black', textAlign: 'center'}}>
                {parseInt(detail.Carbs)}
              </Text>
            </View>
            <View style={styles.boxContainer}>
              <Text style={{fontSize: 23, color: 'black', textAlign: 'center'}}>
                Fats
              </Text>
              <Text style={{fontSize: 19, color: 'black', textAlign: 'center'}}>
                {parseInt(detail.Fats)}
              </Text>
            </View>
          </View>
          <Divider />
          <View style={styles.containerThird}>
            <ScrollView horizontal={true}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  // width: 200,
                  // height: 40,
                  borderRadius: 15,
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 3,
                }}
                onPress={() => {
                  navigation.navigate('checkInHsitory');
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Gill Sans',
                    textAlign: 'center',
                    margin: 10,
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}>
                  CheckIn History
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  // width: 200,
                  // height: 40,
                  borderRadius: 15,
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 3,
                }}
                onPress={() => {
                  navigation.push('chatBot');
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Gill Sans',
                    textAlign: 'center',
                    margin: 10,
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}>
                  Chat Bot
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  // width: 200,
                  // height: 40,
                  borderRadius: 15,
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 3,
                }}
                onPress={() => {
                  navigation.push('DailyWeight');
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Gill Sans',
                    textAlign: 'center',
                    margin: 10,
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}>
                  Add DailyWeight
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'red',
                  // width: 200,
                  // height: 40,
                  borderRadius: 15,
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 3,
                }}
                onPress={() => {
                  navigation.push('FoodRecommendations');
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Gill Sans',
                    textAlign: 'center',
                    margin: 10,
                    color: 'white',
                    backgroundColor: 'transparent',
                  }}>
                  Food Recommendations
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* ================================================================================================== */}
          <View style={{marginLeft: '10%', marginRight: '10%'}}>
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
                navigation.push('WorkoutDashboard');
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
                Workout Builder
              </Text>
            </TouchableOpacity>
          </View>
          <Divider />
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
          <Divider />
          {/* <View style={styles.progressBar}>
          <Progress.Bar color="orange" progress={0.7} width={300} height={15} />
          <ProgressView
            progressTintColor="orange"
            trackTintColor="blue"
            progress={0.7} 
          /> 
        </View> */}
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
        </ScrollView>
      </LinearGradient>
    </View>
  );
};
export default Coaching;
