import React from 'react';
import {Screen2 as Styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {View, Text, TouchableOpacity,FlatList} from 'react-native';
const index = (props) => {
  const navigation = props.navigation;
  const Recommendations = [
    {
      data: 'We suggest you workout atleast {3-5} days/week',
    },
    {
      data: 'Increase your activity level by doing activities you like e.g walking',
    },
    {
      data: 'Do a calories session atleast {once/week}. Do any cardio exercise of your choice',
    },
    {
      data: 'We suggest you workout atleast {3-5} days/week 2',
    },
    {
      data: 'Increase your activity level by doing activities you like e.g walking 2',
    },
    {
      data: 'Do a calories session atleast {once/week}. Do any cardio exercise of your choice 2',
    },
    {
      data: '6 We suggest you workout atleast {3-5} days/week',
    },
    {
      data: '5 Increase your activity level by doing activities you like e.g walking',
    },
    {
      data: '4 Do a calories session atleast {once/week}. Do any cardio exercise of your choice',
    },
    {
      data: '3 We suggest you workout atleast {3-5} days/week 2',
    },
    {
      data: '2 Increase your activity level by doing activities you like e.g walking 2',
    },
    {
      data: '1 Do a calories session atleast {once/week}. Do any cardio exercise of your choice 2',
    },
  ];
  return (
    <View style={Styles.container}>
      <Text style={{color: '#000000', fontSize: 22}}>
        Do you follow the Provided workout and activity Recommendations?
      </Text>

      <FlatList
        style={{backgroundColor:'#EDEFF2',marginTop:40}}
        data={Recommendations}
        renderItem={item => {
          return (
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingTop: 6}}>
                <Icon name="arrow-circle-right" size={18} color="black" />
              </View>
              <Text style={{fontSize: 19,color:'black'}}>{item.item.data}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.data}
      /> 


      <View style={Styles.Button}>
        <TouchableOpacity
          style={Styles.TouchableOpacity}
          onPress={() => navigation.push('CheckIn3')}>
          <Text style={{color: '#FCFCFC', fontSize: 16}}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.TouchableOpacity}
          onPress={() => navigation.push('CheckIn3')}>
          <Text style={{color: '#FCFCFC', fontSize: 16}}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
