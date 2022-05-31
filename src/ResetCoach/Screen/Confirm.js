import React, {useState, Component, useRef, useContext} from 'react';
import {weightLoseSpeed as Styles} from '../Style/index';
import Table from 'react-bootstrap/Table';

import LinearGradient from 'react-native-linear-gradient';
import {DataTable} from 'react-native-paper';

import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import DataContext from '../../DataContext/DataContext';
const optionsPerPage = [2, 3, 4];
const index = props => {
  const navigation = props.navigation;
  const {resetAccount} = useContext(DataContext);
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffff', padding: 20, paddingTop: 0}}>
      <View style={Styles.bottom}>
        <View style={Styles.bottomContainer}>
          <Text style={Styles.welcomeText}>Please Confirm your Details</Text>
        </View>
      </View>

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Type</DataTable.Title>
          <DataTable.Title>Details</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Weight</DataTable.Cell>
          <DataTable.Cell>{props.route.params[0]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Height</DataTable.Cell>
          <DataTable.Cell>{props.route.params[1]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Gender</DataTable.Cell>
          <DataTable.Cell>{props.route.params[2]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Goal</DataTable.Cell>
          <DataTable.Cell>{props.route.params[3]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Activity</DataTable.Cell>
          <DataTable.Cell>{props.route.params[4]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Fat</DataTable.Cell>
          <DataTable.Cell>{props.route.params[5]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Target Weight</DataTable.Cell>
          <DataTable.Cell>{props.route.params[6]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Target per Week</DataTable.Cell>
          <DataTable.Cell>{props.route.params[7]}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>

      <LinearGradient
        start={{x: 0.3, y: 0.25}}
        end={{x: 0.5, y: 0.7}}
        locations={[0.3, 1.6, 0.6]}
        colors={['#5362D5', '#5362D5', '#5362D5']}
        style={Styles.linearGradient}>
        <TouchableOpacity
          onPress={async () => {
            var result = await resetAccount(props.route.params);
            result
              ? navigation.push('initialCoaching')
              : () => {
                  navigation.push('createAccount');
                };
          }}>
          <Text style={Styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};
export default index;
