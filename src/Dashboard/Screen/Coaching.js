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


          
        </View>
      </View>
    </ScrollView>
  );
};
export default Coaching;
