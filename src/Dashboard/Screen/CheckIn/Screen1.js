import React, {useState, useContext, useEffect} from 'react';
import {Screen1 as Styles} from './styles';
import {View, Text, TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import DataContext from '../../../DataContext/DataContext';

const index = (props) => {
  const navigation = props.navigation;
  const {previousCalories} = useContext(DataContext);
  const [detail,setDetail]= useState({});
  useEffect(() => { 
    async function fetchData() {
      const a= await previousCalories();
      setDetail(a);
      // details(res.data);
    }
    fetchData();
  }, []);
  
  return ( 
    <View style={Styles.container}>
      <Text style={{color: '#000000', fontSize: 22}}>
        Were you compliant with your Calories and macro Targets?
      </Text>
      <View style={Styles.inTake}>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell>Calories</DataTable.Cell>
            <DataTable.Cell>{detail.Calories}</DataTable.Cell>
            <DataTable.Cell>
              {' '}
              <Icon name="checkmark-done-outline" size={24} color="black" />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Protein</DataTable.Cell>
            <DataTable.Cell>{detail.Protein}</DataTable.Cell>
            <DataTable.Cell>
              {' '}
              <Icon name="checkmark-done-outline" size={24} color="black" />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Fats</DataTable.Cell>
            <DataTable.Cell>{detail.Fats}</DataTable.Cell>
            <DataTable.Cell>
              {' '}
              <Icon name="checkmark-done-outline" size={24} color="black" />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Carbs</DataTable.Cell>
            <DataTable.Cell>{detail.Carbs}</DataTable.Cell>
            <DataTable.Cell>
              {' '}
              <Icon name="checkmark-done-outline" size={24} color="black" />
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
      <View style={Styles.Button}>
        <TouchableOpacity 
          style={Styles.TouchableOpacity}
          onPress={() => navigation.push('CheckIn2')}>
          <Text style={{color: '#FCFCFC', fontSize: 16}}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.TouchableOpacity}
          onPress={() => navigation.push('CheckIn2')}>
          <Text style={{color: '#FCFCFC', fontSize: 16}}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default index;
