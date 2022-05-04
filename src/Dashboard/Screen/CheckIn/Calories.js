import React, {useState, useContext, useEffect} from 'react';
import {Calories as Styles} from '../../Style/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import DataContext from '../../../DataContext/DataContext';

const index = props => {
  const [detail,setDetail]= useState({});
  const navigation = props.navigation;
  const {currentCalories} = useContext(DataContext);
  useEffect(() => { 
    async function fetchData() {
      const a= await currentCalories();
       setDetail(a);
    }
    fetchData();
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={{fontSize: 22, color: '#000000'}}>
        Here are your calories and macros recommendations
      </Text>
      <View style={Styles.DetailBox}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Calories</DataTable.Title>
            <DataTable.Title>Protein</DataTable.Title>
            <DataTable.Title>Carbs</DataTable.Title>
            <DataTable.Title>Fats</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>{detail.Calories}</DataTable.Cell>
            <DataTable.Cell>{detail.Fats}</DataTable.Cell>
            <DataTable.Cell>{detail.Carbs}</DataTable.Cell>
            <DataTable.Cell>{detail.Fats}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 22, paddingTop: 10}}>What to do?</Text>
      </View>
      <View style={{paddingTop: 10}}>
        <TouchableOpacity
          style={{flexDirection: 'row', padding: 10}}
          onPress={() => {
            alert('ok');
          }}>
          <View style={{paddingTop: 2}}>
            <Icon name="angle-double-right" size={16} color="black" />
          </View>
          <Text style={{fontSize: 15}}>
            Eat within Recommended Calories and macro{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', padding: 10}}
          onPress={() => {
            alert('ok');
          }}>
          <View style={{paddingTop: 2}}>
            <Icon name="angle-double-right" size={16} color="black" />
          </View>
          <Text style={{fontSize: 15}}>
            Track Your food using the tracker in Dashboard{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', padding: 10}}
          onPress={() => {
            alert('ok');
          }}>
          <View style={{paddingTop: 2}}>
            <Icon name="angle-double-right" size={16} color="black" />
          </View>
          <Text style={{fontSize: 15}}>
            CheckIn using the coaching dashboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', padding: 10}}
          onPress={() => {
            alert('ok');
          }}>
          <View style={{paddingTop: 2}}>
            <Icon name="angle-double-right" size={16} color="black" />
          </View>
          <Text style={{fontSize: 15}}>
            You can eat whatever foods you like as long as you stay within your
            calories and macro intake{' '}
          </Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity
        style={{
          padding: 20,
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          padding: 10,
        }} 
        onPress={() => navigation.push('Dashboard')}>
        <Text style={{color: '#000000', fontSize: 16}}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;
