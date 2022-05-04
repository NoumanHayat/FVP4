import React from 'react';
import {Screen3 as Styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {View, Text, TouchableOpacity} from 'react-native';
import Table from 'react-bootstrap/Table';
import {DataTable} from 'react-native-paper';
const index = () => {
  return (
    <View style={Styles.container}>
      <View style={{alignItems: 'center'}}>
        <Icon name="accusoft" size={64} color="black" />
      </View>
      <Text style={{fontSize: 22, color: 'black'}}>
        Looks like your body has responded well.So we will make no change this
        week.
      </Text>

      <View style={Styles.inTake}>
        <Text style={{fontSize: 15, color: 'black'}}>
          Lates Calories and macros intake
        </Text>
        <DataTable>
          <DataTable.Row>
            <DataTable.Cell>Calories</DataTable.Cell>
            <DataTable.Cell>1450</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Protein</DataTable.Cell>
            <DataTable.Cell>1450</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Fats</DataTable.Cell>
            <DataTable.Cell>4500</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Carbs</DataTable.Cell>
            <DataTable.Cell>4500</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
      <TouchableOpacity
        style={Styles.TouchableOpacity}
        onPress={() => alert('working')}>
        <Text style={{color: '#F3F3F3', fontSize: 22}}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;
