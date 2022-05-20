import React,{useState,useContext,useEffect} from 'react';
import {DailyWeight as Styles} from '../Style/index';

import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {Input} from 'react-native-elements';
import {DataTable} from 'react-native-paper';
import DataContext from '../../DataContext/DataContext';

const index = props => {
  const {addDailyWeight,getDailyWeight} = useContext(DataContext);
  const [weight, setWeight]=useState(0);
  const [bodyFat,setBodyFat]=useState(0);
  const [detail,setDetail]= useState({});
  useEffect(() => { 
    async function fetchData() {
      const a= await getDailyWeight();
       setDetail(a);
       console.log(a)
    }
    fetchData();
  }, []);

  
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <View style={Styles.Container}>
        <View style={Styles.HeadingText}>
          <Text style={{fontSize: 26}}>Add Weight & Body Fat</Text>
        </View>
        <View style={Styles.InputArea}>
          <Input
            placeholder="Body Weight"
            onChangeText={e => {
              setWeight(e);
            }}
          />
          <Input
            placeholder="Waist in CM"
            onChangeText={e => {
              setBodyFat(e);
            }}
          />
          <View style={Styles.touchableOpacityArea}>
            <TouchableOpacity
              style={Styles.touchableOpacity}
              onPress={async() => {
                const res= await addDailyWeight(weight,bodyFat);
                res.status=="success"?alert("Added Successfully"):alert("Something went wrong");
              }}>
              <Text style={Styles.buttonText}>Add Weight</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>History</DataTable.Title>
              <DataTable.Title>Body Fat</DataTable.Title>
              <DataTable.Title>Weight</DataTable.Title>
            </DataTable.Header>

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
                  <DataTable.Row>
                    <DataTable.Cell>{item.Date}</DataTable.Cell>
                    <DataTable.Cell>{Math.round(item.bodyFatPercentage)}%</DataTable.Cell>
                    <DataTable.Cell>{parseInt(item.weight)}</DataTable.Cell>
                  </DataTable.Row>
                );
              }}
            /> 

            {/* //==================================================== */}
        
          </DataTable>
        </View>
      </View>
    </View>
  ); 
};
export default index;
