import React from 'react';
import {StyleSheet, View} from 'react-native';
import TopBarNavigator from '../CustomNavigator/TopBarNavigator';
const WorkoutDashboard = props => {
  return (
    <View style={Styles.container}>
      <TopBarNavigator props={props} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});
export default WorkoutDashboard;
