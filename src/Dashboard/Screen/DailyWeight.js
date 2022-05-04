import React,{useState,useContext} from 'react';
import {DailyWeight as Styles} from '../Style/index';

import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {Input} from 'react-native-elements';
import {DataTable} from 'react-native-paper';
import DataContext from '../../DataContext/DataContext';

const index = props => {
  const {addDailyWeight} = useContext(DataContext);
  const [weight, setWeight]=useState(0);
  const [bodyFat,setBodyFat]=useState(0);

  const history = [
    {
      id: 0,
      history: '04/17/2022',
      weight: '98KG',
      bodyFat: '40%',
    },
    {
      id: 1,
      history: '04/18/2022',
      weight: '97KG',
      bodyFat: '27%',
    },
    {
      id: 2,
      history: '04/17/2022',
      weight: '96KG',
      bodyFat: '40%',
    },
    {
      id: 3,
      history: '04/18/2022',
      weight: '93KG',
      bodyFat: '27%',
    },
    {
      id: 4,
      history: '04/17/2022',
      weight: '98KG',
      bodyFat: '40%',
    },
    {
      id: 5,
      history: '04/18/2022',
      weight: '97KG',
      bodyFat: '27%',
    },
    {
      id: 6,
      history: '04/17/2022',
      weight: '96KG',
      bodyFat: '40%',
    },
    {
      id: 7,
      history: '04/18/2022',
      weight: '93KG',
      bodyFat: '27%',
    },
  ]; 
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
            placeholder="Body Fat (optional)"
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
            {/* ========================================================== */}

            <FlatList
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (({highlighted}) => (
                  <View
                    style={[Style.separator, highlighted && {marginLeft: 0}]}
                  />
                ))
              }
              data={history}
              renderItem={({item, index, separators}) => {
                return (
                  <DataTable.Row>
                    <DataTable.Cell>{item.history}</DataTable.Cell>
                    <DataTable.Cell>{item.bodyFat}</DataTable.Cell>
                    <DataTable.Cell>{item.weight}</DataTable.Cell>
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
