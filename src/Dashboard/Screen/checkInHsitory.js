import React,{useContext,useState,useEffect} from 'react';
import {checkInHsitory as Styles} from '../Style/index';

import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {Input} from 'react-native-elements';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import DataContext from '../../DataContext/DataContext';


const index = props => {
  const {checkInHsitory} = useContext(DataContext);
  const [detail,setDetail]= useState({});

  useEffect(() => { 
    async function fetchData() {
      const a= await checkInHsitory();
       setDetail(a);
    }
    fetchData();
  }, []);
  const history = [
    {
      id: 0,
      Date: 'Mar 12-Apr 1,2022',
      status: 'Lose Weight',
      weightUpdate: '-0.8',
    },
    {
      id: 1,
      Date: 'Mar 13-Apr 1,2022',
      status: 'Lose Weight',
      weightUpdate: '-0.6',
    },
    {
      id: 2,
      Date: 'Mar 12-Apr 1,2022',
      status: 'Maintain Weight',
      weightUpdate: '0',
    },
    {
      id: 3,
      Date: 'Mar 12-Apr 5,2022',
      status: 'Maintain Weight',
      weightUpdate: '0',
    },
    {
      id: 4,
      Date: 'Mar 12-Apr 12,2022',
      status: 'Maintain Weight',
      weightUpdate: '0',
    },
    {
      id: 5,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 6,
      Date: 'Mar 12-Apr 19,2022',
      status: 'Gain Weight',
      weightUpdate: '0.7',
    },
    {
      id: 7,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '1.8',
    },
    {
      id: 8,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 9,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 10,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 11,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 12,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 13,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 14,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
    {
      id: 15,
      Date: 'Mar 12-Apr 17,2022',
      status: 'Gain Weight',
      weightUpdate: '0.8',
    },
  ]; 
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={Styles.Container}>
        <View style={Styles.HeadingText}>
          <Text style={{fontSize: 26}}>Check In History</Text>
        </View>

        <View style={Styles.FlatListViewContainer}>
          <FlatList
            ItemSeparatorComponent={
              Platform.OS !== 'android' &&
              (({highlighted}) => (
                <View
                  style={[Style.separator, highlighted && {marginLeft: 0}]}
                />
              ))
            }
            data={detail}
            renderItem={({item, index, separators}) => {
              return (
                <View style={[Styles.CardView]}>
                  <View style={Styles.TextArea}>
                    <Text style={{color: 'black', fontSize: 17}}>
                      {item.Date}
                    </Text> 
                    <Text>{item.Status}:{item.Weight}-{item.PreviousWeight}={item.Weight-item.PreviousWeight} kgs/week</Text>
                  </View>
                  <View style={Styles.IconArea}>
                    <Icon name="arrow-right" size={25} color="black" />
                  </View>
                </View>
              );
            }}
          />

          {/* //==================================================== */}
        </View>
      </View>
    </View>
  );
};
export default index;
