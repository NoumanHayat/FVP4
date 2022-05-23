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

import DataContext from '../../DataContext/DataContext';

import * as Progress from 'react-native-progress';
// import {Divider} from 'react-native-paper';
const Coaching = props => {
  const [detail, setDetail] = useState({});
  const [user, setUser] = useState({});
  const navigation = props.navigation;

  const {currentCalories, userDetails} = useContext(DataContext);
  useEffect(() => {
    async function fetchData() {
      const a = await currentCalories();
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
      <ScrollView>
        <View style={styles.namePart}>
          <Text style={{fontSize: 35, padding: 10}}>{user.Goal}</Text>

          <View style={styles.golesAndWeights}>
            <Text style={{fontSize: 17}}>{user.weeklyGoal}KG/per week</Text>
            <Text style={{fontSize: 17}}>Current weight:{user.Weight}KG</Text>
          </View>
        </View>

        <View style={styles.containerSecond}>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23}}>Cals</Text>
            <Text style={{fontSize: 19}}>{parseInt(detail.Calories)}</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23}}>Protein</Text>
            <Text style={{fontSize: 19}}>{parseInt(detail.Protein)}</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23}}>Carbs</Text>
            <Text style={{fontSize: 19}}>{parseInt(detail.Carbs)}</Text>
          </View>
          <View style={styles.boxContainer}>
            <Text style={{fontSize: 23}}>Fats</Text>
            <Text style={{fontSize: 19}}>{parseInt(detail.Fats)}</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.containerThird}>
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
        </View>
        {/* ================================================================================================== */}
        <View style={{marginLeft:'10%',marginRight:'10%'}}>
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
            onPress={()=>{navigation.push("WorkoutDashboard")}}>
            <Text 
              style={{
                fontSize: 18,
                fontFamily: 'Gill Sans',
                textAlign: 'center',
                margin: 10,
                color: '#ffffff',
                backgroundColor: 'transparent',
              }}>
              Coaching
            </Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <View style={styles.containerFourth}>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Total Check</Text>
            <Text style={styles.statusText}>5</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Next CheckIn Date</Text>
            <Text style={styles.statusText}>5</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.progressBar}>
          <Progress.Bar color="black" progress={0.7} width={300} height={20} />
        </View>
        <View style={styles.checkInButton}>
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
        </View>
      </ScrollView>
    </View>
  );
};
export default Coaching;
