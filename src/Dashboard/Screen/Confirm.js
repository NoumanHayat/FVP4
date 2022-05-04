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
  const {signup} = useContext(DataContext);
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
      {/* <View style={Styles.lowestContainer}>
        <Text>Email:{props.route.params[0]}</Text>
        <Text>Name:{props.route.params[1]}</Text>
        <Text>Age:{props.route.params[4]}</Text>
        <Text>Weight:{props.route.params[5]}</Text>
        <Text>Height:{props.route.params[6]}</Text>
        <Text>Gender:{props.route.params[7]}</Text>
        <Text>Goal:{props.route.params[8]}</Text>
        <Text>Activity:{props.route.params[9]}</Text>
        <Text>Fat %:{props.route.params[10]}</Text>
        <Text>Target Weight:{props.route.params[11]}</Text>
        <Text>Target per Week:{props.route.params[12]}</Text>
      </View> */}

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Type</DataTable.Title>
          <DataTable.Title>Details</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Email</DataTable.Cell>
          <DataTable.Cell>{props.route.params[0]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Name</DataTable.Cell>
          <DataTable.Cell>{props.route.params[1]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Age</DataTable.Cell>
          <DataTable.Cell>{props.route.params[4]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Weight</DataTable.Cell>
          <DataTable.Cell>{props.route.params[5]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Height</DataTable.Cell>
          <DataTable.Cell>{props.route.params[6]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Gender</DataTable.Cell>
          <DataTable.Cell>{props.route.params[7]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Goal</DataTable.Cell>
          <DataTable.Cell>{props.route.params[8]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Activity</DataTable.Cell>
          <DataTable.Cell>{props.route.params[9]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Fat</DataTable.Cell>
          <DataTable.Cell>{props.route.params[10]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Target Weight</DataTable.Cell>
          <DataTable.Cell>{props.route.params[11]}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>Target per Week</DataTable.Cell>
          <DataTable.Cell>{props.route.params[12]}</DataTable.Cell>
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
            var result = await signup(props.route.params);
            result
              ? navigation.push('initialCoaching')
              : navigation.push('createAccount');
          }}>
          <Text style={Styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};
export default index;
