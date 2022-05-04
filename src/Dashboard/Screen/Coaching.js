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
const Coaching = (props) => {
  const [detail,setDetail]= useState({}); 
  const [user,setUser]= useState({});
  const navigation = props.navigation;

  const {currentCalories,userDetails} = useContext(DataContext);
  useEffect(() => { 
    async function fetchData() {
      const a= await currentCalories();
      userDetails().then((data) => {
        setUser(data.data)
      }).catch((error)=>{
     });
       setDetail(a);
       console.log(user)
    }
    fetchData();
  }, []);
  return ( 
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.namePart}>
          <Text style={{fontSize: 35, padding: 10}}>
            {user.Goal}
          </Text>

          <View style={styles.golesAndWeights}>
            <Text style={{fontSize: 17}}>{user.weeklyGoal}KG/per week</Text>
            <Text style={{fontSize: 17}}>
              Current weight:{user.Weight}KG
            </Text>
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
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15, padding: 20}}>
              Workout builder{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              navigation.navigate('chatBot');
            }}>
            <Text style={{fontSize: 15, padding: 20}}>
              Chat Bot{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableOpacity}>
            <Text style={{fontSize: 15, padding: 20}}>
              Nutrition{' '}
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
          <Button
            title="Check in"
            onPress={() => {
              navigation.push('CheckIn1');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Coaching;
